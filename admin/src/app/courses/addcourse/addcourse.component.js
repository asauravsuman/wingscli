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
var AddcourseComponent = (function () {
    // mySelectValue: Array<string>; // Array of strings for multi select, string for single select.
    function AddcourseComponent(alertService, courseService) {
        this.alertService = alertService;
        this.courseService = courseService;
        this.users = [];
        this.loading = false;
        // model: any = {title: '', description:'', branch:Array, department:Array};
        this.model = { title: '', description: '', branch: '', department: '', mode: '', status: '', search: '', accesstag: '', fees: 0, examtimelimit: 0 };
        this.selDepartment = [];
        this.selBranch = [];
        this.ListBranch = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.model.mode = "course";
        this.model.status = "Active";
        this.model.accesstag = 'Public';
    }
    AddcourseComponent.prototype.ngOnInit = function () {
        // this.alertService.success('Loading .. ');
        // this.loading = true;
        this.getBranch();
        this.getDepartment();
    };
    AddcourseComponent.prototype.onDepartmentSelection = function (item) {
        this.selDepartment.push(item.value);
        //console.log('- selected (value: ' + item.value  + ', label:' + item.label + ')');
    };
    AddcourseComponent.prototype.onBranchSelection = function (item) {
        this.selBranch.push(item.value);
    };
    AddcourseComponent.prototype.saveCourse = function () {
        var _this = this;
        this.alertService.success('Saving in progress ... ');
        this.model.department = JSON.stringify(this.selDepartment);
        this.model.branch = JSON.stringify(this.selBranch);
        this.courseService.create(this.model)
            .subscribe(function (data) {
            _this.alertService.success('Saved successfully.');
            _this.model.title = "";
            _this.model.description = "";
            _this.model.branch = "";
            _this.model.department = "";
        }, function (error) {
            _this.alertService.error('Please try again.');
        });
    };
    AddcourseComponent.prototype.getDepartment = function () {
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
    AddcourseComponent.prototype.getBranch = function () {
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
    AddcourseComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'addcourse.component.html'
        }),
        __metadata("design:paramtypes", [index_1.AlertService, index_1.CourseService])
    ], AddcourseComponent);
    return AddcourseComponent;
}());
exports.AddcourseComponent = AddcourseComponent;
//# sourceMappingURL=addcourse.component.js.map