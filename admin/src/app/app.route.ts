import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_guards/index';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { OrganisationComponent, EditorganisationComponent ,AddorganisationComponent } from './organisation/index';
import { ProfileComponent } from './profile/index';
import { UsersComponent, EdituserComponent } from './users/index';
import { EmployeeComponent, AddemployeeComponent, EditemployeeComponent} from './employee/index';
import { CoursesComponent, AddcourseComponent, EditcourseComponent, AddtopictocourseComponent } from './courses/index';
import { SettingsComponent } from './settings/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'organisation', component: OrganisationComponent, canActivate: [AuthGuard] },
    { path: 'edit-organisation/:id', component: EditorganisationComponent, canActivate: [AuthGuard] },
    { path: 'add-organisation', component: AddorganisationComponent, canActivate: [AuthGuard] },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
    { path: 'edit-user', component: EdituserComponent, canActivate: [AuthGuard] },
    { path: 'employee', component: EmployeeComponent, canActivate: [AuthGuard] },
    { path: 'add-employee', component: AddemployeeComponent, canActivate: [AuthGuard] },
    { path: 'edit-employee/:id', component: EditemployeeComponent, canActivate: [AuthGuard] },
    { path: 'courses', component: CoursesComponent, canActivate: [AuthGuard] },
    { path: 'add-course', component: AddcourseComponent, canActivate: [AuthGuard] },
    { path: 'edit-course/:id', component: EditcourseComponent, canActivate: [AuthGuard] },
    { path: 'add-topic-to-course/:id', component: AddtopictocourseComponent, canActivate: [AuthGuard] },
    { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const RouteComponent = RouterModule.forRoot(appRoutes);
