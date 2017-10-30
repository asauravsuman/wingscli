import { Component, OnInit } from '@angular/core';

import { AlertService, UserService } from '../../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'addemployee.component.html'
})

export class AddemployeeComponent implements OnInit {
    currentUser: any;
    loading = false;

     model: any = {first: '', middle: '', last: '',email:'', image:'', password:'', phone:'', organisation:'', role: ''};
    constructor( private alertService: AlertService, private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.model.organisation = this.currentUser.organisation;
        this.model.role = 'employee';
        this.model.image = '';
        this.model.password = 'kiwings';
    }

    ngOnInit() {

    }
    saveEmployee(){
        this.alertService.success('Saving employee ...');
        this.userService.create(this.model).subscribe((resUser) => { 
            this.alertService.success('Employee saved successfully.');
        });
    }
}