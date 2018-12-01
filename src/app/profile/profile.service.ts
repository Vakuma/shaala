import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class ProfileService {

    constructor(private http: HttpClient, private _http: Http) { }

    getCompanyProfileData(): Observable<any> {
        // const body = JSON.stringify(inpParams);
        return this.http.get('/gateway/user/profile')
            .map((response: Response) => {
                const res = response;
                return res;
            });
    }

    // updateStatus(inpParams): Observable<any> {
    //     const body = JSON.stringify(inpParams);
    //     return this.http.post('http://13.229.46.57/api/transaction/update', body)
    //         .map((response: Response) => {
    //             const res = response;
    //             return res;
    //         });
    // }


    changePassWord(data): Observable<any> {
        const body = JSON.stringify(data);
        return this.http.post('/gateway/user/changePassword', body)
            .map((response: Response) => {
                const res = response;
                return res;
            });

    }

    editUserData(data): Observable<any> {
        const body = JSON.stringify(data);
        return this.http.post('/gateway/user/editProfile', body)
            .map((response: Response) => {
                const res = response;
                return res;
            });

    }

}
