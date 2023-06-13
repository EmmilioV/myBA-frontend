import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployerComponent } from './employer/employer.component';
import { ServiceAdministrationComponent } from './employer/appointment-administration/service-administration/service-administration.component';
import { AppointmentAdministrationComponent } from './employer/appointment-administration/appointment-administration.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'employee',
    component: EmployeeComponent,
    title: 'employee'
  },
  {
    path: 'employer',
    component: EmployerComponent,
    title: 'employer'
  },
  {
    path: 'employer/:userId/admin-appointments',
    component: AppointmentAdministrationComponent,
    title: 'admin-appointments'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
