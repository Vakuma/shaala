import { Injectable } from '@angular/core';
import { Http, Headers, Response, ResponseOptions, RequestOptions } from '@angular/http';
// import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
// import { JwtHelper } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { DataStorageService } from './data-storage.service';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable()
export class ForgotusrpassrService {

  constructor(private _http: Http,
              private http: HttpClient,
              private dataStorage: DataStorageService) { }

/***************************************************************************************************
 * @function forgotPass //Service to verify the given username and email for reset
 * @param email
 * @param username
 ***************************************************************************************************/

  // forgotPass(email: string, username: string): Observable<any> {
  //   const headers = new Headers({'Content-type': 'application/json'});
  //   const options = new RequestOptions({headers: headers});
  //   const body = JSON.stringify({email: email, username: username});

  //   return this._http.post('/gateway/auth/forgotPassword', body, options )
  //   .map((response: Response) => {
  //       const res = response.json();
  //       if (res) {
  //         return res;
  //       }
  //   });
  // }

  forgotPass(email: string, username: string): Observable<any> {
    const body = JSON.stringify({email: email, username: username});
    const options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    // const body = JSON.stringify(newClient);
    return this.http.post('/gateway/auth/forgotPassword', body, options)
        .map((response: Response) => {
            const res = response;
            return res;
        });
  }
}
