import { Component, OnInit } from '@angular/core'; 

import { User } from '../../_models/index';
import { AlertService, CourseService } from '../../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'addcourse.component.html'
})

export class AddcourseComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    loading = false;
    // model: any = {title: '', description:'', branch:Array, department:Array};
    model: any = {title: '', description:'', branch: '', department: '', mode:'', status:'', search:'', accesstag: '', fees:0, examtimelimit:0 };
    selDepartment: any = [];
    selBranch: any = [];


    ListBranch: any = [];
    ListDepartment: Array<any> ;
   // mySelectValue: Array<string>; // Array of strings for multi select, string for single select.


    constructor( private alertService: AlertService, private courseService: CourseService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.model.mode = "course";
        this.model.status = "Active";
        this.model.accesstag = 'Public';
    }

    ngOnInit() {
        // this.alertService.success('Loading .. ');
        // this.loading = true;
        this.getBranch();
        this.getDepartment();
    }
    onDepartmentSelection(item: any) {
        this.selDepartment.push(item.value);
        //console.log('- selected (value: ' + item.value  + ', label:' + item.label + ')');
    }
    onBranchSelection(item: any) {
        this.selBranch.push(item.value);
    }
    saveCourse(){
        this.alertService.success('Saving in progress ... ');
        this.model.department = JSON.stringify(this.selDepartment); 
        this.model.branch = JSON.stringify(this.selBranch);
        this.courseService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Saved successfully.');
                    this.model.title = "";
                    this.model.description = "";
                    this.model.branch = "";
                    this.model.department = "";
                },
                error => {
                    this.alertService.error('Please try again.');
                });
    }
    private getDepartment() {
        this.courseService.getDepartment().subscribe((response) => {
            var tempDepartment = [];
            for (var i=0; i<response.department.length; i++){ 
                if(response.department[i].name){ 
                    var temp = {value:'', label:''};
                    temp.value = response.department[i]._id;
                    temp.label = response.department[i].name;
                    tempDepartment.push(temp);
                }
            }
            this.ListDepartment = tempDepartment;

           // this.data = response.branch;
        });
    }
    private getBranch() {
        this.courseService.getBranch().subscribe((response) => {
            var tempBranch = [];
            for (var i=0; i<response.branch.length; i++){ 
                if(response.branch[i].name){ 
                    var temp = {value:'', label:''};
                    temp.value = response.branch[i]._id;
                    temp.label = response.branch[i].name;
                    tempBranch.push(temp);
                }
            }
            this.ListBranch = tempBranch;

           // this.data = response.branch;
        });
    }
}