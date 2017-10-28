import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouteComponent } from './app.route';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/index';
import { RegisterComponent} from './register/index';
import { FooterComponent } from './shared/footer/index';
import { MenuComponent } from './shared/menu/index';
import { LogoComponent } from './shared/logo/index';
import { HeaderComponent } from './shared/header/index';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent, LogoComponent, MenuComponent, FooterComponent,
  ],
  imports: [
    BrowserModule,
    RouteComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
