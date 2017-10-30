import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(username: string, password: string) {
        var user = { "user": { "email": username, "password": password }};
        return this.http.post('http://13.126.51.149:3010/api/users/login', user, this.setHeader() )
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user.user && user.user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user.user));
                }

                return user;
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    private setHeader() {
        // create authorization header with jwt token
        let headers = new Headers({ 'Content-Type': 'application/json'});
        return new RequestOptions({ headers: headers });
        
    }
}