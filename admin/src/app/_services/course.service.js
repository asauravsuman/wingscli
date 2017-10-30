"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
// import { Course } from '../_models/index';
var CourseService = (function () {
    function CourseService(http) {
        this.http = http;
    }
    CourseService.prototype.getAll = function () {
        return this.http.get('http://13.126.51.149:3010/api/courses/', this.jwt()).map(function (response) { return response.json(); });
    };
    CourseService.prototype.getById = function (course) {
        var objData = { 'course': course };
        return this.http.post('http://13.126.51.149:3010/api/courses/getbyid/', objData, this.jwt()).map(function (response) { return response.json(); });
    };
    CourseService.prototype.create = function (course) {
        if (course === void 0) { course = {}; }
        var objData = { 'courses': course };
        return this.http.post('http://13.126.51.149:3010/api/courses/add', objData, this.jwt()).map(function (response) { return response.json(); });
    };
    CourseService.prototype.update = function (course) {
        if (course === void 0) { course = {}; }
        var objData = { 'courses': course };
        return this.http.post('http://13.126.51.149:3010/api/courses/update', objData, this.jwt()).map(function (response) { return response.json(); });
    };
    // update(user: User) {
    //     return this.http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    // }
    CourseService.prototype.delete = function (id) {
        return this.http.delete('/api/users/' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    CourseService.prototype.getBranch = function () {
        return this.http.get('http://13.126.51.149:3010/api/branch/', this.jwt()).map(function (response) { return response.json(); });
    };
    CourseService.prototype.getDepartment = function () {
        return this.http.get('http://13.126.51.149:3010/api/department/', this.jwt()).map(function (response) { return response.json(); });
    };
    // private helper methods
    CourseService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + currentUser.token, 'Content-Type': 'application/json' });
            return new http_1.RequestOptions({ headers: headers });
        }
    };
    CourseService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], CourseService);
    return CourseService;
}());
exports.CourseService = CourseService;
//# sourceMappingURL=course.service.js.map