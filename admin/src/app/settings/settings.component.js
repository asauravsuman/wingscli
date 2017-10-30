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
var index_1 = require("../_services/index");
var http_1 = require("@angular/http");
var SettingsComponent = (function () {
    function SettingsComponent(http, organisationService, alertService) {
        this.http = http;
        this.organisationService = organisationService;
        this.alertService = alertService;
        this.loading = false;
        this.data = [];
        this.filterQuery = "";
        this.rowsOnPage = 5;
        this.sortBy = "email";
        this.sortOrder = "asc";
        this.sortByWordLength = function (a) {
            return a.city.length;
        };
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.loadAllUsers();
        // this.alertService.success('Loading .. ');     
    };
    SettingsComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.organisationService.getAll().subscribe(function (users) { _this.data = users.organisation; });
    };
    SettingsComponent.prototype.toInt = function (num) {
        return +num;
    };
    SettingsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'settings.component.html'
        }),
        __metadata("design:paramtypes", [http_1.Http, index_1.OrganisationService, index_1.AlertService])
    ], SettingsComponent);
    return SettingsComponent;
}());
exports.SettingsComponent = SettingsComponent;
//# sourceMappingURL=settings.component.js.map