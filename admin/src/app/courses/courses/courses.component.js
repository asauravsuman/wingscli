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
var CoursesComponent = (function () {
    function CoursesComponent(alertService, courseService) {
        this.alertService = alertService;
        this.courseService = courseService;
        this.users = [];
        this.loading = false;
        this.data = [];
        this.filterQuery = "";
        this.rowsOnPage = 5;
        this.sortBy = "email";
        this.sortOrder = "asc";
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    CoursesComponent.prototype.ngOnInit = function () {
        this.loadUsers();
        // this.alertService.success('Loading .. ');
        // this.loading = true;
    };
    CoursesComponent.prototype.loadUsers = function () {
        var _this = this;
        this.courseService.getAll().subscribe(function (courses) {
            _this.data = courses.course;
        });
    };
    CoursesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'courses.component.html'
        }),
        __metadata("design:paramtypes", [index_1.AlertService, index_1.CourseService])
    ], CoursesComponent);
    return CoursesComponent;
}());
exports.CoursesComponent = CoursesComponent;
//# sourceMappingURL=courses.component.js.map