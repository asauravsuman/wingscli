import { Component, OnInit } from '@angular/core'; 
import { RouterModule, ActivatedRoute } from '@angular/router';

import { User } from '../../_models/index';
import { AlertService, CourseService } from '../../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'addtopictocourse.component.html'
})

export class AddtopictocourseComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    model: any = { id:'', title: '', description:'', branch: '', department: '' };
    course: any = {id: ''};
    selDepartment: any = '';
    selBranch: any = '';


    loading = false;
    public activeTab = 'topic';
    listTopic: any = [];
    topic: any = {topictitle: ''};
    radio: any = {radiotitle: ''};
    dropdown: any = {dropdowntitle: ''};
    checkbox: any = {checkboxtitle: ''};
    image: any = {imagetitle: ''};

    constructor( private route: ActivatedRoute, private alertService: AlertService, private courseService: CourseService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.course.id=this.route.snapshot.params['id'];
    }

    ngOnInit() {
        this.alertService.success('Fetching .. ');
        this.getCourse();
    }
    getCourse(){
        this.courseService.getById(this.course).subscribe((resCourse) => { 
            this.model.id = this.course.id;
            this.model.title = resCourse.course[0].title;
            this.model.description = resCourse.course[0].description;
                var tempDepartment:any = '';
                resCourse.course[0].department.forEach(function(value:any){
                   tempDepartment =  tempDepartment +  value.name+', ';
                });
                var tempBranch:any = '';
                resCourse.course[0].branch.forEach(function(value:any){
                   tempBranch =  tempBranch +  value.name+', ';
                });
            this.selDepartment = tempDepartment;
            this.selBranch = tempBranch;     
            this.alertService.success('Course fetched successfully.');
        });
    }

    clickTab(mode:string){
        this.activeTab = mode;
    }
    saveTopic(){
        this.listTopic.push(this.topic.topictitle);
    }
    saveRadio(){
        this.listTopic.push(this.radio.radiotitle);
    }
    saveDropdown(){
        this.listTopic.push(this.dropdown.dropdowntitle);
    }
    saveCheckbox(){
        this.listTopic.push(this.checkbox.checkboxtitle);
    }
    saveImage(){
        this.listTopic.push(this.image.imagetitle);
    }
}