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
var AddtopictocourseComponent = (function () {
    function AddtopictocourseComponent(route, alertService, courseService) {
        this.route = route;
        this.alertService = alertService;
        this.courseService = courseService;
        this.users = [];
        this.model = { id: '', title: '', description: '', branch: '', department: '' };
        this.course = { id: '' };
        this.selDepartment = '';
        this.selBranch = '';
        this.loading = false;
        this.activeTab = 'topic';
        this.listTopic = [];
        this.topic = { topictitle: '' };
        this.radio = { radiotitle: '' };
        this.dropdown = { dropdowntitle: '' };
        this.checkbox = { checkboxtitle: '' };
        this.image = { imagetitle: '' };
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.course.id = this.route.snapshot.params['id'];
    }
    AddtopictocourseComponent.prototype.ngOnInit = function () {
        this.alertService.success('Fetching .. ');
        this.getCourse();
    };
    AddtopictocourseComponent.prototype.getCourse = function () {
        var _this = this;
        this.courseService.getById(this.course).subscribe(function (resCourse) {
            _this.model.id = _this.course.id;
            _this.model.title = resCourse.course[0].title;
            _this.model.description = resCourse.course[0].description;
            var tempDepartment = '';
            resCourse.course[0].department.forEach(function (value) {
                tempDepartment = tempDepartment + value.name + ', ';
            });
            var tempBranch = '';
            resCourse.course[0].branch.forEach(function (value) {
                tempBranch = tempBranch + value.name + ', ';
            });
            _this.selDepartment = tempDepartment;
            _this.selBranch = tempBranch;
            _this.alertService.success('Course fetched successfully.');
        });
    };
    AddtopictocourseComponent.prototype.clickTab = function (mode) {
        this.activeTab = mode;
    };
    AddtopictocourseComponent.prototype.saveTopic = function () {
        this.listTopic.push(this.topic.topictitle);
    };
    AddtopictocourseComponent.prototype.saveRadio = function () {
        this.listTopic.push(this.radio.radiotitle);
    };
    AddtopictocourseComponent.prototype.saveDropdown = function () {
        this.listTopic.push(this.dropdown.dropdowntitle);
    };
    AddtopictocourseComponent.prototype.saveCheckbox = function () {
        this.listTopic.push(this.checkbox.checkboxtitle);
    };
    AddtopictocourseComponent.prototype.saveImage = function () {
        this.listTopic.push(this.image.imagetitle);
    };
    AddtopictocourseComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'addtopictocourse.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, index_1.AlertService, index_1.CourseService])
    ], AddtopictocourseComponent);
    return AddtopictocourseComponent;
}());
exports.AddtopictocourseComponent = AddtopictocourseComponent;
//# sourceMappingURL=addtopictocourse.component.js.map