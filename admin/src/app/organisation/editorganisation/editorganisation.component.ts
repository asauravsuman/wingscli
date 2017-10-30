import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { User, Organisation } from '../../_models/index';
import { AlertService, OrganisationService } from '../../_services/index';
import { Http } from "@angular/http";

@Component({
    moduleId: module.id,
    templateUrl: 'editorganisation.component.html'
})

export class EditorganisationComponent implements OnInit {
    currentUser: any = {};
    loading = false;
    public activeTab = "org-first";
    public data: any = [];

    organisation: any = { id: '' };
    model: any = {
        name: '', type: '', website: '', status: '',
        address1: '', address2: '', city: '', landmark: '', pincode: '', state: '',
        contactname: '', contactemail: '', phone1: '', phone2: '', fax: '', remarks: '',
    };

    constructor(private route: ActivatedRoute, private http: Http, private organisationService: OrganisationService, private alertService: AlertService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.organisation.id = this.route.snapshot.params['id'];
        // console.log(this.organisation.id);
        this.model.status = 'Active';
    }

    ngOnInit() {
        this.getOrganisation();
        this.alertService.success('Fetching .. ');
    }

    getOrganisation() {
        this.organisationService.findById(this.organisation).subscribe((orgRes) => {
            console.log(orgRes);
            this.model.id = orgRes.organisation._id;
            this.model.name = orgRes.organisation[0].name;
            this.model.type = orgRes.organisation[0].type;
            this.model.website = orgRes.organisation[0].website;
            this.model.address1 = orgRes.organisation[0].address[0].address1;
            this.model.address2 = orgRes.organisation[0].address[0].address2;
            this.model.city = orgRes.organisation[0].address[0].city;
            this.model.landmark = orgRes.organisation[0].address[0].landmark;
            this.model.pincode = orgRes.organisation[0].address[0].pincode;
            this.model.state = orgRes.organisation[0].address[0].state;
            this.model.contactname = orgRes.organisation[0].contact[0].name;
            this.model.contactemail = orgRes.organisation[0].contact[0].email;
            this.model.phone1 = orgRes.organisation[0].contact[0].phone1;
            this.model.phone2 = orgRes.organisation[0].contact[0].phone2;
            this.model.fax = orgRes.organisation[0].contact[0].fax;
            this.model.remarks = orgRes.organisation[0].contact[0].remarks;
            this.alertService.success('Organisation fetched successfully.');
        });
    }
    updateOrganisation() {
        this.alertService.success('Updating ...');
        this.organisationService.update(this.model).subscribe((orgRes) => {
            this.alertService.success('Organisation updated successfully.');
        });
    }
    clickTab(mode: string) {
        this.activeTab = mode;
    }
}