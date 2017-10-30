import { Component, OnInit } from '@angular/core';

import { User } from '../../_models/index';
import { AlertService, UserService } from '../../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'employee.component.html'
})

export class EmployeeComponent implements OnInit {
    currentUser: any = {};
    users: User[] = [];
    loading = false;

    public data: any = [];
    public filterQuery = "";
    public rowsOnPage = 5;
    public sortBy = "email";
    public sortOrder = "asc";
    model: any = {id: ''};

    constructor( private alertService: AlertService, private userService: UserService,) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.model.id = this.currentUser.organisation;
    }

    ngOnInit() {
        this.alertService.success('Loading .. ');
        this.loadUsers();
    }
    private loadUsers() {
        this.userService.getEmployeeByOrganisation(this.model).subscribe((users) => { 
            this.data = users.user;
            this.alertService.success('Loaded.');
        });
    }

    public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.city.length;
    }
}