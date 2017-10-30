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
var router_1 = require("@angular/router");
var index_1 = require("../../_services/index");
var http_1 = require("@angular/http");
var EditorganisationComponent = (function () {
    function EditorganisationComponent(route, http, organisationService, alertService) {
        this.route = route;
        this.http = http;
        this.organisationService = organisationService;
        this.alertService = alertService;
        this.currentUser = {};
        this.loading = false;
        this.activeTab = "org-first";
        this.data = [];
        this.organisation = { id: '' };
        this.model = {
            name: '', type: '', website: '', status: '',
            address1: '', address2: '', city: '', landmark: '', pincode: '', state: '',
            contactname: '', contactemail: '', phone1: '', phone2: '', fax: '', remarks: '',
        };
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.organisation.id = this.route.snapshot.params['id'];
        // console.log(this.organisation.id);
        this.model.status = 'Active';
    }
    EditorganisationComponent.prototype.ngOnInit = function () {
        this.getOrganisation();
        this.alertService.success('Fetching .. ');
    };
    EditorganisationComponent.prototype.getOrganisation = function () {
        var _this = this;
        this.organisationService.findById(this.organisation).subscribe(function (orgRes) {
            console.log(orgRes);
            _this.model.id = orgRes.organisation._id;
            _this.model.name = orgRes.organisation[0].name;
            _this.model.type = orgRes.organisation[0].type;
            _this.model.website = orgRes.organisation[0].website;
            _this.model.address1 = orgRes.organisation[0].address[0].address1;
            _this.model.address2 = orgRes.organisation[0].address[0].address2;
            _this.model.city = orgRes.organisation[0].address[0].city;
            _this.model.landmark = orgRes.organisation[0].address[0].landmark;
            _this.model.pincode = orgRes.organisation[0].address[0].pincode;
            _this.model.state = orgRes.organisation[0].address[0].state;
            _this.model.contactname = orgRes.organisation[0].contact[0].name;
            _this.model.contactemail = orgRes.organisation[0].contact[0].email;
            _this.model.phone1 = orgRes.organisation[0].contact[0].phone1;
            _this.model.phone2 = orgRes.organisation[0].contact[0].phone2;
            _this.model.fax = orgRes.organisation[0].contact[0].fax;
            _this.model.remarks = orgRes.organisation[0].contact[0].remarks;
            _this.alertService.success('Organisation fetched successfully.');
        });
    };
    EditorganisationComponent.prototype.updateOrganisation = function () {
        var _this = this;
        this.alertService.success('Updating ...');
        this.organisationService.update(this.model).subscribe(function (orgRes) {
            _this.alertService.success('Organisation updated successfully.');
        });
    };
    EditorganisationComponent.prototype.clickTab = function (mode) {
        this.activeTab = mode;
    };
    EditorganisationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'editorganisation.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, http_1.Http, index_1.OrganisationService, index_1.AlertService])
    ], EditorganisationComponent);
    return EditorganisationComponent;
}());
exports.EditorganisationComponent = EditorganisationComponent;
//# sourceMappingURL=editorganisation.component.js.map