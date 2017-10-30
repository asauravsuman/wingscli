import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { AlertService, OrganisationService } from '../_services/index';
import {Http} from "@angular/http";

@Component({
    moduleId: module.id,
    templateUrl: 'settings.component.html'
})

export class SettingsComponent implements OnInit {
    currentUser: User;
    loading = false;

    public data: any = [];
    public filterQuery = "";
    public rowsOnPage = 5;
    public sortBy = "email";
    public sortOrder = "asc";

    constructor(private http: Http, private organisationService: OrganisationService, private alertService: AlertService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
        // this.alertService.success('Loading .. ');     
    }

    private loadAllUsers() {
        this.organisationService.getAll().subscribe((users) => { this.data = users.organisation;});
    }

    public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.city.length;
    }

}