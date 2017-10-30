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
var index_1 = require("../_services/index");
var ProfileComponent = (function () {
    function ProfileComponent(http, userService, alertService) {
        this.http = http;
        this.userService = userService;
        this.alertService = alertService;
        this.currentUser = {};
        this.loading = false;
        this.imgpath = '<img src=""  alt="Raised Image" class="img-rounded img-responsive img-raised">';
        this.config = {
            url: '',
            acceptedFiles: 'image/*',
            createImageThumbnails: true,
            maxFilesize: 1,
        };
        this.activeTab = "profile";
        this.model = { id: '', first: '', middle: '', last: '', email: '', phone: '' };
        this.modelPassword = { password: '', confirmpassword: '', oldpassword: '' };
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.model.id = this.currentUser.id;
        this.model.email = this.currentUser.email;
        this.model.first = this.currentUser.first;
        this.model.middle = this.currentUser.middle;
        this.model.last = this.currentUser.last;
        this.model.image = 'http://13.126.51.149:3010/api/user/getprofileimage/' + this.model.id + '?d';
        this.model.phone = this.currentUser.phone;
        var headers = { 'Authorization': 'Bearer ' + this.currentUser.token };
        this.config.url = 'http://13.126.51.149:3010/api/user/changeprofile/' + this.model.id;
        this.config.paramName = 'profile';
        this.config.headers = headers;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        // this.alertService.success('Loading .. ');     
    };
    ProfileComponent.prototype.clickTab = function (mode) {
        this.activeTab = mode;
    };
    ProfileComponent.prototype.onUploadSuccess = function (args) {
        var _this = this;
        this.userService.update(this.model).subscribe(function (resUser) {
            _this.model.image = 'http://13.126.51.149:3010/api/user/getprofileimage/' + _this.model.id;
            _this.alertService.success('Profile image updated successfully.');
        });
    };
    ProfileComponent.prototype.onUploadError = function () {
    };
    ProfileComponent.prototype.saveProfile = function () {
        var _this = this;
        this.alertService.success('Updating ...');
        this.userService.update(this.model).subscribe(function (resUser) {
            localStorage.setItem('currentUser', JSON.stringify(resUser.user));
            _this.alertService.success('Profile updated successfully.');
        });
    };
    ProfileComponent.prototype.changePassword = function () {
        this.alertService.success('Updating password ...');
        // this.userService.changepassword(this.modelPassword).subscribe((resUser) => { 
        //     this.alertService.success('Password changed successfully.');
        // });
    };
    ProfileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'profile.component.html'
        }),
        __metadata("design:paramtypes", [http_1.Http, index_1.UserService, index_1.AlertService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map