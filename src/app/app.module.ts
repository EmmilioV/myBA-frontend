import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployerComponent } from './employer/employer.component';
import { ServiceAdministrationComponent } from './employer/appointment-administration/service-administration/service-administration.component';
import { EmployeeAdministrationComponent } from './employer/employee-administration/employee-administration.component';
import { AppointmentAdministrationComponent } from './employer/appointment-administration/appointment-administration.component';
import { CustomerAdministrationComponent } from './employer/customer-administration/customer-administration.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeComponent,
    EmployeeComponent,
    EmployerComponent,
    ServiceAdministrationComponent,
    EmployeeAdministrationComponent,
    CustomerAdministrationComponent,
    AppointmentAdministrationComponent,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
