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
var OrganisationService = (function () {
    function OrganisationService(http) {
        this.http = http;
    }
    OrganisationService.prototype.getAll = function () {
        return this.http.get('http://13.126.51.149:3010/api/organisation', this.jwt()).map(function (response) { return response.json(); });
    };
    OrganisationService.prototype.findById = function (organisation) {
        var objData = { 'organisation': organisation };
        return this.http.post('http://13.126.51.149:3010/api/organisation/getbyid/', objData, this.jwt()).map(function (response) { return response.json(); });
    };
    OrganisationService.prototype.create = function (organisation) {
        var objData = { 'organisation': organisation };
        return this.http.post('http://13.126.51.149:3010/api/organisation/add/', objData, this.jwt()).map(function (response) { return response.json(); });
    };
    OrganisationService.prototype.update = function (organisation) {
        var objData = { 'organisation': organisation };
        return this.http.put('http://13.126.51.149:3010/api/organisation/update/', objData, this.jwt()).map(function (response) { return response.json(); });
    };
    OrganisationService.prototype.delete = function (id) {
        return this.http.delete('/api/users/' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    // private helper methods
    OrganisationService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + currentUser.token, 'Content-Type': 'application/json' });
            return new http_1.RequestOptions({ headers: headers });
        }
    };
    OrganisationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], OrganisationService);
    return OrganisationService;
}());
exports.OrganisationService = OrganisationService;
//# sourceMappingURL=organisation.service.js.map