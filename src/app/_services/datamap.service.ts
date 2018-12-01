import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {JwtHelper} from 'angular2-jwt';

@Injectable()
export class DataMapService {

    constructor(private http: Http) { }

    getCountryList() {
        const headers = new Headers({'Content-type': 'application/json'});
        headers.append('Authorization', 'Token ' + localStorage.getItem('token'));
        const options = new RequestOptions({headers: headers});
        const url = 'http://13.229.46.57/api/lookup/country';

        return this.http.get(url, options)
            .map((response: Response) => {
                const res = response.json();
                return res;
            });
    }

    getApplicationType(value) {

        if (value === 1) {
            return 'Direct Merchant';
        } else if (value === 2) {
            return 'PSP Merchant';
        } else if (value === 3) {
            return 'Broker Merchant';
        } else if (value === 4) {
            return 'Introducer Merchant';
        } else if (value === 5) {
            return 'PSP';
        } else if (value === 6) {
            return 'Broker';
        } else {
            return value;
        }
    }
}
