import { Component, OnInit } from '@angular/core';

import { User } from '../../_models/index';
import { AlertService, OrganisationService } from '../../_services/index';
import {Http} from "@angular/http";

@Component({
    moduleId: module.id,
    templateUrl: 'organisation.component.html'
})

export class OrganisationComponent implements OnInit {
    currentUser: any = {};
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
        this.loadAllOrganisation();
        // this.alertService.success('Loading .. ');     
    }

    private loadAllOrganisation() {
        this.organisationService.getAll().subscribe((orgs) => { this.data = orgs.organisation;});
    }

    public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.city.length;
    }

}