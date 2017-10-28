import { Component, HostBinding } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
// import { User } from '../../_models/index';
@Component({
    moduleId: module.id,
    selector: 'menu-cmp',
    templateUrl: 'menu.component.html'
})

export class MenuComponent {
    flagActiveDashboard: string;
    flagActiveOrganisation: string;
    flagActiveEmployee: string;
    flagActiveUsers: string;
    flagActiveCourses: string;
    flagActiveProfile: string;
    flagActiveSettings: string;
    currentpath: string;
    currentUser: any = {};

    constructor(
        private route: ActivatedRoute) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.route.url.subscribe((params: Params) => {
            if (params.length) {
                this.currentpath = params[0].path || '/';
                this.activateMenuClass(this.currentpath);
            } else {
                this.flagActiveDashboard = 'active';
            }
        });
    }
    isOrganisationAdmin() {
        if (this.currentUser.role == 'organisationadmin') {
            return true;
        }
        return false;
    }
    isSuperAdmin() {
        if (this.currentUser.role == 'superadmin') {
            return true;
        }
        return false;
    }

    activateMenuClass(urlparam: string) {
        switch (urlparam) {
            case 'dashboard':
                this.flagActiveDashboard = 'active';
                break;
            case 'organisation':
                this.flagActiveOrganisation = 'active';
                break;
            case 'edit-organisation':
                this.flagActiveOrganisation = 'active';
                break;
            case 'add-organisation':
                this.flagActiveOrganisation = 'active';
                break;
            case 'courses':
                this.flagActiveCourses = 'active';
                break;
            case 'edit-course':
                this.flagActiveCourses = 'active';
                break;
            case 'add-topic-to-course':
                this.flagActiveCourses = 'active';
                break;
            case 'employee':
                this.flagActiveEmployee = 'active'; 
                break;
            case 'edit-employee':
                this.flagActiveEmployee = 'active';
                break;
            case 'users':
                this.flagActiveUsers = 'active';
                break;
            case 'edit-user':
                this.flagActiveUsers = 'active';
                break;
            case 'profile':
                this.flagActiveProfile = 'active';
                break;
            case 'settings':
                this.flagActiveSettings = 'active';
                break;
            default:
                this.flagActiveDashboard = 'active';
                break;
        }
    }
}
