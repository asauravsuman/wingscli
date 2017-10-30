import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User ,Organisation} from '../_models/index';

@Injectable()
export class OrganisationService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('http://13.126.51.149:3010/api/organisation', this.jwt()).map((response: Response) => response.json());
    }

    findById(organisation : {}) {
        var objData = {'organisation': organisation};
        return this.http.post('http://13.126.51.149:3010/api/organisation/getbyid/', objData, this.jwt()).map((response: Response) => response.json());
    }

    create(organisation :  {}) {
        var objData = {'organisation': organisation};
        return this.http.post('http://13.126.51.149:3010/api/organisation/add/', objData, this.jwt()).map((response: Response) => response.json());
    }

    update(organisation: Organisation) {
        var objData = {'organisation': organisation};
        return this.http.put('http://13.126.51.149:3010/api/organisation/update/', objData, this.jwt()).map((response: Response) => response.json());
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