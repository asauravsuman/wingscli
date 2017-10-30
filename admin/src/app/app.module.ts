import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouteComponent } from './app.route';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/index';
import { RegisterComponent} from './register/index';
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
    LoginComponent,
    RegisterComponent,
    HeaderComponent, LogoComponent, MenuComponent, FooterComponent,
  ],
  imports: [
    BrowserModule,
    RouteComponent,
    FormsModule,
    HttpModule
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
