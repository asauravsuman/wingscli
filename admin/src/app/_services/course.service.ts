import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

// import { Course } from '../_models/index';

@Injectable()
export class CourseService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('http://13.126.51.149:3010/api/courses/', this.jwt()).map((response: Response) => response.json());
    }

    getById(course: {}) {
        var objData = {'course': course};
        return this.http.post('http://13.126.51.149:3010/api/courses/getbyid/', objData,  this.jwt()).map((response: Response) => response.json());
    }

    create(course: any = {}) {
        var objData = {'courses': course};
        return this.http.post('http://13.126.51.149:3010/api/courses/add', objData, this.jwt()).map((response: Response) => response.json());
    }
    update(course: any = {}) {
        var objData = {'courses': course};
        return this.http.post('http://13.126.51.149:3010/api/courses/update', objData, this.jwt()).map((response: Response) => response.json());
    }

    // update(user: User) {
    //     return this.http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    // }

    delete(id: number) {
        return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    getBranch() {
        return this.http.get('http://13.126.51.149:3010/api/branch/', this.jwt()).map((response: Response) => response.json());
    }
    getDepartment() {
        return this.http.get('http://13.126.51.149:3010/api/department/', this.jwt()).map((response: Response) => response.json());
    }
    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer '+currentUser.token , 'Content-Type': 'application/json'});
            return new RequestOptions({ headers: headers });
        }
    }
}