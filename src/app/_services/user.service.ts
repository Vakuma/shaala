import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    // getAll() {
    //     return this.http.get('http://13.229.46.57/api/users', this.jwt()).map((response: Response) => response.json());
    // }

    // getById(id: number) {
    //     return this.http.get('http://13.229.46.57/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    // }

    // create(user: User) {
    //     return this.http.post('http://13.229.46.57/api/users', user, this.jwt()).map((response: Response) => response.json());
    // }

    // update(user: User) {
    //     return this.http.put('http://13.229.46.57/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    // }

    // delete(id: number) {
    //     return this.http.delete('http://13.229.46.57/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    // }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            const headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
