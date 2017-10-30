import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { AlertService, UserService } from '../_services/index';
import {Http} from "@angular/http";
@Component({
    moduleId: module.id,
    templateUrl: 'edituser.component.html'
})

export class EdituserComponent implements OnInit {
    currentUser: any = {};
    loading = false;

    constructor(private http: Http, private userService: UserService, private alertService: AlertService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        //this.loadUsers();
        // this.alertService.success('Loading .. ');
        // this.loading = true;
    }
    
}