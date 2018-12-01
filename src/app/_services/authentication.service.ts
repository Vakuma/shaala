import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {JwtHelper} from 'angular2-jwt';
import { DataStorageService } from './data-storage.service';
// tslint:disable-next-line:import-blacklist
import { ReplaySubject } from 'rxjs';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient,
        private _route: Router,
        private _dataStorage: DataStorageService) { }

    login(username: string, password: string) {
        const headers = new HttpHeaders().set('Content-type', 'application/json');
        const body = JSON.stringify({ username: username, password: password });

        return this.http.post('/gateway/auth/login', body, { headers })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                if (response && response.status === 1) {
                    return response;
                } else if (response && response.status === 0) {
                    return response;
                }
            });
    }

    // function to logout..
    logout() {
        // remove user from local storage to log user out
        // const lang = localStorage.getItem('language');
        localStorage.removeItem('token');
        localStorage.clear();
        this._route.navigate(['/login']);
        // if (lang) {
        //     localStorage.setItem('language', lang);
        // }
    }

    // to check if the user is logged in returns true/false
    isLoggedIn() {
        const jwtHelper = new JwtHelper();
        const token = localStorage.getItem('token');
        if (!token) {
            return false;
        }

        const isExpired = jwtHelper.isTokenExpired(token);
        return !isExpired;
    }
}
