import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


// Routes
import { APP_ROUTING } from './app.routes';

// Services
import { NodepgService } from './services/nodepg.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { ReportsComponent } from './components/reports/reports.component';
import { EnrollmentComponent } from './components/enrollment/enrollment.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    ReportsComponent,
    EnrollmentComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule
  ],
  providers: [
    NodepgService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
