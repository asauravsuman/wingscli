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
var EditemployeeComponent = (function () {
    function EditemployeeComponent(route, alertService, userService) {
        this.route = route;
        this.alertService = alertService;
        this.userService = userService;
        this.loading = false;
        this.employee = { id: '' };
        this.model = { id: '', first: '', middle: '', last: '', email: '', phone: '', organisation: '', role: '' };
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.model.organisation = this.currentUser.organisation;
        this.model.role = 'employee';
        this.employee.id = this.route.snapshot.params['id'];
    }
    EditemployeeComponent.prototype.ngOnInit = function () {
        this.alertService.success('Fetching .. ');
        this.getEmployee();
    };
    EditemployeeComponent.prototype.getEmployee = function () {
        var _this = this;
        this.userService.getById(this.employee).subscribe(function (resUser) {
            _this.model.id = resUser.user.id;
            _this.model.email = resUser.user.email;
            _this.model.first = resUser.user.first;
            _this.model.middle = resUser.user.middle;
            _this.model.last = resUser.user.last;
            _this.model.image = resUser.user.image;
            _this.model.phone = resUser.user.phone;
            _this.alertService.success('Employee fetched successfully.');
        });
    };
    EditemployeeComponent.prototype.saveEmployee = function () {
        var _this = this;
        this.alertService.success('Updating ...');
        this.userService.update(this.model).subscribe(function (resUser) {
            _this.alertService.success('Employee updated successfully.');
        });
    };
    EditemployeeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'editemployee.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, index_1.AlertService, index_1.UserService])
    ], EditemployeeComponent);
    return EditemployeeComponent;
}());
exports.EditemployeeComponent = EditemployeeComponent;
//# sourceMappingURL=editemployee.component.js.map