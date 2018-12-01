import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { DataStorageService } from './data-storage.service';

@Injectable()
export class ResetpassService {

  constructor(private _http: Http,
              private _dataStorage: DataStorageService) { }

  /*********************************************************************************************
   * @function tokenEmailVerifier //To verify the reset link parameters
   * @param token
   * @param email
   */
  tokenUserVerifier(token: string, email: string): Observable<any> {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options  = new RequestOptions({headers: headers});
    const body = JSON.stringify({username: email, resetToken: token});

    return this._http.post('/gateway/auth/verifyResetToken', body , options)
      .map((response: Response) => {
        const res = response.json();
        if (res.status === 1) {
            return true;
          } else {
          this._dataStorage.write('forgotError', res.error.message);
          return false;
        }
      });
  }

  /*********************************************************************************************
   * @function saveNewPassword //to reset the password
   * @param email
   * @param newPass
   * @param token
   */
  saveNewPassword(username: string, newPass: string, token: string): Observable<any> {
    //
    const headers = new Headers({'Content-type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    const body = JSON.stringify({username: username, password: newPass, resetToken: token});
    return this._http.post('/gateway/auth/resetPassword', body, options)
    .map((response: Response) => {
      const res = response.json();
      if (res) {
        return res;
      }
    });

  }
}
