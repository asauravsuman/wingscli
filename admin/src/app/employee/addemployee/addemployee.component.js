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
var AddemployeeComponent = (function () {
    function AddemployeeComponent(alertService, userService) {
        this.alertService = alertService;
        this.userService = userService;
        this.loading = false;
        this.model = { first: '', middle: '', last: '', email: '', image: '', password: '', phone: '', organisation: '', role: '' };
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.model.organisation = this.currentUser.organisation;
        this.model.role = 'employee';
        this.model.image = '';
        this.model.password = 'kiwings';
    }
    AddemployeeComponent.prototype.ngOnInit = function () {
    };
    AddemployeeComponent.prototype.saveEmployee = function () {
        var _this = this;
        this.alertService.success('Saving employee ...');
        this.userService.create(this.model).subscribe(function (resUser) {
            _this.alertService.success('Employee saved successfully.');
        });
    };
    AddemployeeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'addemployee.component.html'
        }),
        __metadata("design:paramtypes", [index_1.AlertService, index_1.UserService])
    ], AddemployeeComponent);
    return AddemployeeComponent;
}());
exports.AddemployeeComponent = AddemployeeComponent;
//# sourceMappingURL=addemployee.component.js.map