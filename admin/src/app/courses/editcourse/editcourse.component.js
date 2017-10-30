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
var EditcourseComponent = (function () {
    // mySelectValue: Array<string>; // Array of strings for multi select, string for single select.
    function EditcourseComponent(route, alertService, courseService) {
        this.route = route;
        this.alertService = alertService;
        this.courseService = courseService;
        this.users = [];
        this.loading = false;
        // model: any = {title: '', description:'', branch:Array, department:Array};
        this.model = { id: '', title: '', description: '', branch: '', department: '' };
        this.course = { id: '' };
        this.selDepartment = [];
        this.selBranch = [];
        this.ListBranch = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.course.id = this.route.snapshot.params['id'];
    }
    EditcourseComponent.prototype.ngOnInit = function () {
        // this.alertService.success('Loading .. ');
        // this.loading = true;
        this.getBranch();
        this.getDepartment();
        this.alertService.success('Fetching .. ');
        this.getCourse();
        //this.selectedDepartment = ['59c1f63f036c5836174de114'];
    };
    EditcourseComponent.prototype.onDepartmentSelection = function (item) {
        this.selDepartment.push(item.value);
        console.log(this.selDepartment);
    };
    EditcourseComponent.prototype.onBranchSelection = function (item) {
        this.selBranch.push(item.value);
        console.log(this.selBranch);
    };
    EditcourseComponent.prototype.onDepartmentUnselection = function (item) {
        this.selDepartment.splice(this.selDepartment.indexOf(item.value), 1);
        console.log(this.selDepartment);
    };
    EditcourseComponent.prototype.onBranchUnselection = function (item) {
        this.selBranch.splice(this.selBranch.indexOf(item.value), 1);
        console.log(this.selBranch);
    };
    EditcourseComponent.prototype.getCourse = function () {
        var _this = this;
        this.courseService.getById(this.course).subscribe(function (resCourse) {
            _this.model.id = _this.course.id;
            _this.model.title = resCourse.course[0].title;
            _this.model.description = resCourse.course[0].description;
            var tempDepartment = [];
            resCourse.course[0].department.forEach(function (value) {
                var temp = [];
                temp.push(value._id);
                tempDepartment.push(value._id);
            });
            var tempBranch = [];
            resCourse.course[0].branch.forEach(function (value) {
                var temp = [];
                temp.push(value._id);
                tempBranch.push(value._id);
            });
            _this.selDepartment = tempDepartment;
            _this.selBranch = tempBranch;
            _this.alertService.success('Course fetched successfully.');
        });
    };
    EditcourseComponent.prototype.saveCourse = function () {
        var _this = this;
        this.alertService.success('Saving in progress ... ');
        this.model.department = JSON.stringify(this.selDepartment);
        this.model.branch = JSON.stringify(this.selBranch);
        this.courseService.update(this.model)
            .subscribe(function (data) {
            _this.alertService.success('Saved successfully.');
        }, function (error) {
            _this.alertService.error('Please try again.');
        });
    };
    EditcourseComponent.prototype.getDepartment = function () {
        var _this = this;
        this.courseService.getDepartment().subscribe(function (response) {
            var tempDepartment = [];
            for (var i = 0; i < response.department.length; i++) {
                if (response.department[i].name) {
                    var temp = { value: '', label: '' };
                    temp.value = response.department[i]._id;
                    temp.label = response.department[i].name;
                    tempDepartment.push(temp);
                }
            }
            _this.ListDepartment = tempDepartment;
            // this.data = response.branch;
        });
    };
    EditcourseComponent.prototype.getBranch = function () {
        var _this = this;
        this.courseService.getBranch().subscribe(function (response) {
            var tempBranch = [];
            for (var i = 0; i < response.branch.length; i++) {
                if (response.branch[i].name) {
                    var temp = { value: '', label: '' };
                    temp.value = response.branch[i]._id;
                    temp.label = response.branch[i].name;
                    tempBranch.push(temp);
                }
            }
            _this.ListBranch = tempBranch;
            // this.data = response.branch;
        });
    };
    EditcourseComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'editcourse.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, index_1.AlertService, index_1.CourseService])
    ], EditcourseComponent);
    return EditcourseComponent;
}());
exports.EditcourseComponent = EditcourseComponent;
//# sourceMappingURL=editcourse.component.js.map