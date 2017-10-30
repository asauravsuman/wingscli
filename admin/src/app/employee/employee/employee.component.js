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
var EmployeeComponent = (function () {
    function EmployeeComponent(alertService, userService) {
        this.alertService = alertService;
        this.userService = userService;
        this.currentUser = {};
        this.users = [];
        this.loading = false;
        this.data = [];
        this.filterQuery = "";
        this.rowsOnPage = 5;
        this.sortBy = "email";
        this.sortOrder = "asc";
        this.model = { id: '' };
        this.sortByWordLength = function (a) {
            return a.city.length;
        };
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.model.id = this.currentUser.organisation;
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        this.alertService.success('Loading .. ');
        this.loadUsers();
    };
    EmployeeComponent.prototype.loadUsers = function () {
        var _this = this;
        this.userService.getEmployeeByOrganisation(this.model).subscribe(function (users) {
            _this.data = users.user;
            _this.alertService.success('Loaded.');
        });
    };
    EmployeeComponent.prototype.toInt = function (num) {
        return +num;
    };
    EmployeeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'employee.component.html'
        }),
        __metadata("design:paramtypes", [index_1.AlertService, index_1.UserService])
    ], EmployeeComponent);
    return EmployeeComponent;
}());
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map