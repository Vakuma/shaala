import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {JwtHelper} from 'angular2-jwt';

@Injectable()
export class UserManagementService {

    constructor(private http: HttpClient, private _http: Http) { }

    getUserList(inpParams): Observable<any> {
        const body = JSON.stringify(inpParams);
        return this.http.post('/gateway/user/list', body)
            .map((response: Response) => {
                const res = response;
                return res;
            });
    }



    createUser(newUserData): Observable<any> {
        const body = JSON.stringify(newUserData);
        return this.http.post('/gateway/user/create', body)
            .map((response: Response) => {
                const res = response;
                return res;
            });
    }

    updateStatus(data): Observable<any> {
        const body = JSON.stringify(data);
        return this.http.post('/gateway/user/updateStatus', body)
            .map((response: Response) => {
                const res = response;
                return res;
            });
    }

    updateUserData(data): Observable<any> {
        const body = JSON.stringify(data);
        return this.http.post('/gateway/user/editUser', body)
            .map((response: Response) => {
                const res = response;
                return res;
            });
    }

    clientList(): Observable<any> {
        return this.http.get('/gateway/lookup/client')
          .map((response: any) => {
            const res = response;
            return res;
          });
    }
}
