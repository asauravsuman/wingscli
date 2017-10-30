import { Component, OnInit } from '@angular/core'; 
import { DropzoneComponent , DropzoneDirective, DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../_models/index';
import { AlertService, UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'profile.component.html'
})

export class ProfileComponent implements OnInit {
    currentUser: any = {};
    loading = false;
    imgpath = '<img src=""  alt="Raised Image" class="img-rounded img-responsive img-raised">';
    public config: DropzoneConfigInterface = {
        url: '',
        acceptedFiles: 'image/*',
        createImageThumbnails: true,
        maxFilesize:1,       
      };

    public activeTab = "profile";
    model: any = {id:'', first: '', middle: '', last: '',email:'',phone:''};
    modelPassword: any = {password:'', confirmpassword: '', oldpassword: ''};
    constructor(private http: Http, private userService: UserService , private alertService: AlertService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.model.id = this.currentUser.id;
        this.model.email = this.currentUser.email;
        this.model.first = this.currentUser.first;
        this.model.middle = this.currentUser.middle;
        this.model.last = this.currentUser.last;
        this.model.image = 'http://13.126.51.149:3010/api/user/getprofileimage/'+this.model.id+'?d';
        this.model.phone = this.currentUser.phone;

        let headers = { 'Authorization': 'Bearer '+this.currentUser.token};
        this.config.url = 'http://13.126.51.149:3010/api/user/changeprofile/'+this.model.id;
        this.config.paramName = 'profile';
        this.config.headers = headers;     
    }

    ngOnInit() {
        // this.alertService.success('Loading .. ');     
    }

    clickTab(mode:string){
        this.activeTab = mode;
    }
    onUploadSuccess(args: any) {
        this.userService.update(this.model).subscribe((resUser) => { 
            this.model.image = 'http://13.126.51.149:3010/api/user/getprofileimage/'+this.model.id;
            this.alertService.success('Profile image updated successfully.');
        });
    }
    onUploadError(){

    }
    saveProfile(){
        this.alertService.success('Updating ...');
        this.userService.update(this.model).subscribe((resUser) => { 
            localStorage.setItem('currentUser', JSON.stringify(resUser.user));
            this.alertService.success('Profile updated successfully.');
        });
    }
    changePassword(){
        this.alertService.success('Updating password ...');
        // this.userService.changepassword(this.modelPassword).subscribe((resUser) => { 
        //     this.alertService.success('Password changed successfully.');
        // });
    }

}