import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormsModule } from '@angular/forms';
import { AppointmentWithServicesInfo } from 'src/models/appointments/appointment.model';
import { APpointmentService } from 'src/services/appointment.service';

@Component({
  selector: 'app-service-administration',
  standalone: true,
  imports: [
	  FormsModule,
    CommonModule,
  ],
  templateUrl: './service-administration.component.html',
  styleUrls: ['./service-administration.component.css']
})
export class ServiceAdministrationComponent implements OnInit, OnDestroy {
	showTable: boolean = false;

	appointment: AppointmentWithServicesInfo;
  private userId: string = "";
  private appointmentId: string = "";

  constructor(
    private location: Location,
		private appointmentHttpService: APpointmentService,
    private route: ActivatedRoute,
  ) { 
    this.appointment = new AppointmentWithServicesInfo();
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      p => {
        this.userId = p["userId"];
        this.appointmentId = p["appointmentId"]
      }
    );

    this.initializeTableForm();
  }

  initializeTableForm() {		
    this.appointmentHttpService.getAppointmentWithServices(String(this.appointmentId)).subscribe((appointment) => {      
      if (appointment) {
        this.appointment = appointment;
        this.showTable = true;
      }
		});
  }

  ngOnDestroy() {

  }

  return() {
		this.ngOnDestroy();
		this.location.back();
	}

}
