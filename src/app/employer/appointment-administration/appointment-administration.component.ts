import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EmployerWithAppointments } from 'src/models/employer/EmployerWithAppointments.model';
import { EmployerService } from 'src/services/employer.service';

@Component({
  selector: 'app-appointment-administration',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './appointment-administration.component.html',
  styleUrls: ['./appointment-administration.component.css']
})
export class AppointmentAdministrationComponent implements OnInit {
	showTable: boolean = false;
	
	employer: EmployerWithAppointments;

	userId: string | null = "";
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
		private location: Location,
		private employerHttp: EmployerService,
	) {
		this.employer = new EmployerWithAppointments;
	}

  ngOnInit(): void {
    this.route.params.subscribe(
      p => this.userId = p["userId"]
    );

    this.initializeTableForm();
	}
	
  ngOnDestroy(): void {
    
  }

	initializeTableForm() {		
    this.employerHttp.getEmployerWithAppointments(String(this.userId)).subscribe((employer) => {
      if (employer) {
        this.employer = employer;
        this.showTable = true;
      }
		});
  }
  
  removeAppointment(appointmentId: string) {
    console.log("ELIMINAR ", appointmentId);
  }

  listAppointmentServices(appointmentId: string) {
    this.router.navigate(["employer",this.userId,"admin-appointment-services",appointmentId]);
  }

	return() {
		this.ngOnDestroy();
		this.location.back();
	}

}
