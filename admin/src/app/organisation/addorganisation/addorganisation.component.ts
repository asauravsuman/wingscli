import { Component, OnInit } from '@angular/core';

import { User, Organisation } from '../../_models/index';
import { AlertService, OrganisationService } from '../../_services/index'; 
import { Http } from "@angular/http";

@Component({
    moduleId: module.id,
    templateUrl: 'addorganisation.component.html'
})

export class AddorganisationComponent implements OnInit {
    currentUser: any = {};
    loading = false;
    public model: any = {
        name: '', type: '', website: '',status:'',
        address1: '', address2: '', city: '', landmark: '', pincode: '', state: '',
        contactname: '', contactemail: '', phone1: '', phone2: '', fax: '', remarks: '',
    };

    constructor(private http: Http, private organisationService: OrganisationService, private alertService: AlertService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.model.status = 'Active';
    }

    ngOnInit() {  }

    addOrganisation() {
        this.alertService.success('Saving in progress ... ');
        this.organisationService.create(this.model)
            .subscribe(
                data  => { this.alertService.success('Saved successfully.'); },
                error => { this.alertService.error('Please try again.');     }
            );
    }
}