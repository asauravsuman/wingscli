import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../_models/index';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('http://13.126.51.149:3010/api/users/', this.jwt()).map((response: Response) => response.json());
    }

    getEmployeeByOrganisation(org: {}) {
        var objData = {'organisation': org};
        return this.http.post('http://13.126.51.149:3010/api/organisation/getallemployee', objData, this.jwt()).map((response: Response) => response.json());
    }

    getById(user: {}) {
        var objData = {'user': user};
        return this.http.post('http://13.126.51.149:3010/api/users/getbyid/', objData,  this.jwt()).map((response: Response) => response.json());
    }

    create(user: {}) {
        var objData = {'user': user};
        return this.http.post('http://13.126.51.149:3010/api/user/', objData, this.jwt()).map((response: Response) => response.json());
    }

    update(user: User) {
        var objData = {'user': user};
        return this.http.put('http://13.126.51.149:3010/api/user/', objData, this.jwt()).map((response: Response) => response.json());
    }

    changepassword(user: any) {
        var objData = {'user': user};
        return this.http.put('http://13.126.51.149:3010/api/user/changepassword/', objData, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer '+currentUser.token, 'Content-Type': 'application/json'});
            return new RequestOptions({ headers: headers });
        }
    }
}