import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { ReportsComponent } from './components/reports/reports.component';
import { EnrollmentComponent } from './components/enrollment/enrollment.component';


const APP_ROUTES: Routes = [
	{ path: 'register', component: RegisterComponent },
	{ path: 'reports', component: ReportsComponent },
	{ path: 'enrollment', component: EnrollmentComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'register'}	
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);