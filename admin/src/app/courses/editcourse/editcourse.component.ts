import { Component, OnInit } from '@angular/core'; 
import { RouterModule, ActivatedRoute } from '@angular/router';

import { User } from '../../_models/index';
import { AlertService, CourseService } from '../../_services/index';

@Component({
    moduleId: module.id, 
    templateUrl: 'editcourse.component.html'
})

export class EditcourseComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    loading = false;
    // model: any = {title: '', description:'', branch:Array, department:Array};
    model: any = { id:'', title: '', description:'', branch: '', department: '' };
    course: any = {id: ''};
    selDepartment: any = [];
    selBranch: any = [];
    ListBranch: any = [];
    ListDepartment: Array<any> ;
   // mySelectValue: Array<string>; // Array of strings for multi select, string for single select.


    constructor(private route: ActivatedRoute, private alertService: AlertService, private courseService: CourseService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.course.id=this.route.snapshot.params['id'];
    }

    ngOnInit() {
        // this.alertService.success('Loading .. ');
        // this.loading = true;
        this.getBranch();
        this.getDepartment();
        this.alertService.success('Fetching .. ');
        this.getCourse();

        //this.selectedDepartment = ['59c1f63f036c5836174de114'];
    }
    onDepartmentSelection(item: any) {
        this.selDepartment.push(item.value);
        console.log(this.selDepartment);
    }
    onBranchSelection(item: any) {
        this.selBranch.push(item.value);
        console.log(this.selBranch);
    }
    onDepartmentUnselection(item: any) {
        this.selDepartment.splice(this.selDepartment.indexOf(item.value), 1);
        console.log(this.selDepartment);
    }
    onBranchUnselection(item: any) {
        this.selBranch.splice(this.selBranch.indexOf(item.value), 1);
        console.log(this.selBranch);
    }
    getCourse(){
        this.courseService.getById(this.course).subscribe((resCourse) => { 
            this.model.id = this.course.id;
            this.model.title = resCourse.course[0].title;
            this.model.description = resCourse.course[0].description;
                var tempDepartment:any = [];
                resCourse.course[0].department.forEach(function(value:any){
                   var temp = [];
                   temp.push(value._id);
                   tempDepartment.push(value._id);
                });
                var tempBranch:any = [];
                resCourse.course[0].branch.forEach(function(value:any){
                   var temp = [];
                   temp.push(value._id);
                   tempBranch.push(value._id);
                });
            this.selDepartment = tempDepartment;
            this.selBranch = tempBranch;     
            this.alertService.success('Course fetched successfully.');
        });
    }
    saveCourse(){
        this.alertService.success('Saving in progress ... ');
        this.model.department = JSON.stringify(this.selDepartment); 
        this.model.branch = JSON.stringify(this.selBranch);
        this.courseService.update(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Saved successfully.');
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