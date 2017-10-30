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
var index_1 = require("../../_services/index");
var http_1 = require("@angular/http");
var AddorganisationComponent = (function () {
    function AddorganisationComponent(http, organisationService, alertService) {
        this.http = http;
        this.organisationService = organisationService;
        this.alertService = alertService;
        this.currentUser = {};
        this.loading = false;
        this.model = {
            name: '', type: '', website: '', status: '',
            address1: '', address2: '', city: '', landmark: '', pincode: '', state: '',
            contactname: '', contactemail: '', phone1: '', phone2: '', fax: '', remarks: '',
        };
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.model.status = 'Active';
    }
    AddorganisationComponent.prototype.ngOnInit = function () { };
    AddorganisationComponent.prototype.addOrganisation = function () {
        var _this = this;
        this.alertService.success('Saving in progress ... ');
        this.organisationService.create(this.model)
            .subscribe(function (data) { _this.alertService.success('Saved successfully.'); }, function (error) { _this.alertService.error('Please try again.'); });
    };
    AddorganisationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'addorganisation.component.html'
        }),
        __metadata("design:paramtypes", [http_1.Http, index_1.OrganisationService, index_1.AlertService])
    ], AddorganisationComponent);
    return AddorganisationComponent;
}());
exports.AddorganisationComponent = AddorganisationComponent;
//# sourceMappingURL=addorganisation.component.js.map