import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';

import { AlertService, UserService } from '../../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'editemployee.component.html'
})

export class EditemployeeComponent implements OnInit {
    currentUser: any;
    loading = false;

    employee: any = {id: ''};
    model: any = {id:'',first: '', middle: '', last: '',email:'', phone:'', organisation:'', role: ''};
    constructor( private route: ActivatedRoute, private alertService: AlertService, private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.model.organisation = this.currentUser.organisation;
        this.model.role = 'employee';

        this.employee.id=this.route.snapshot.params['id'];
    }

    ngOnInit() {
        this.alertService.success('Fetching .. ');
        this.getEmployee();
    }
    getEmployee(){
        this.userService.getById(this.employee).subscribe((resUser) => { 
            this.model.id = resUser.user.id;
            this.model.email = resUser.user.email;
            this.model.first = resUser.user.first;
            this.model.middle = resUser.user.middle;
            this.model.last = resUser.user.last;
            this.model.image = resUser.user.image;
            this.model.phone = resUser.user.phone;
            this.alertService.success('Employee fetched successfully.');
        });
    }
    saveEmployee(){
        this.alertService.success('Updating ...');
        this.userService.update(this.model).subscribe((resUser) => { 
            this.alertService.success('Employee updated successfully.');
        });
    }
}