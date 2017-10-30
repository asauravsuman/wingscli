import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DataTableModule } from "angular2-datatable";
import { SelectModule } from 'angular2-select';
import { DropzoneModule, DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

import { AppComponent } from './app.component';
import { RouteComponent } from './app.route';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/index';
import { RegisterComponent} from './register/index';
import { OrganisationComponent, EditorganisationComponent, AddorganisationComponent } from './organisation/index';
import { ProfileComponent } from './profile/index';
import { UsersComponent, EdituserComponent } from './users/index';
import { EmployeeComponent, AddemployeeComponent, EditemployeeComponent } from './employee/index';
import { CoursesComponent, AddcourseComponent, EditcourseComponent, AddtopictocourseComponent } from './courses/index';
import { SettingsComponent } from './settings/index';


import { FooterComponent } from './shared/footer/index';
import { MenuComponent } from './shared/menu/index';
import { LogoComponent } from './shared/logo/index';
import { HeaderComponent } from './shared/header/index';

import { AlertComponent, DataFilterPipe } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService, OrganisationService, CourseService } from './_services/index';


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    DataFilterPipe,
    HomeComponent,
	OrganisationComponent, EditorganisationComponent,AddorganisationComponent,
    ProfileComponent,
    UsersComponent, EdituserComponent,
    EmployeeComponent, AddemployeeComponent, EditemployeeComponent,
    CoursesComponent, AddcourseComponent, EditcourseComponent, AddtopictocourseComponent,
    SettingsComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent, LogoComponent, MenuComponent, FooterComponent,
  ],
  imports: [
    BrowserModule,
    RouteComponent,
    FormsModule,
    HttpModule,
    DataTableModule,
    SelectModule,
    DropzoneModule
  ],
  providers: [
  	AuthGuard,
  	AlertService,
    AuthenticationService,
    UserService,
    OrganisationService,
    CourseService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
