import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppointmentWithServicesInfo } from 'src/models/appointments/appointment.model';
import { APpointmentService } from 'src/services/appointment.service';
import { Service } from 'src/models/service/service.model';

@Component({
  selector: 'app-service-administration',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
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

  addServiceForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private location: Location,
		private appointmentHttpService: APpointmentService,
    private route: ActivatedRoute,
  ) {
    this.appointment = new AppointmentWithServicesInfo();
    this.addServiceForm = this.fb.group({
      employee_id: ["", Validators.required],
      type_of: ["", Validators.required],
      cost_of: [0, Validators.required],
      duration: [0, Validators.required]
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      p => {
        this.userId = p["userId"];
        this.appointmentId = p["appointmentId"]
      }
    );

    this.initializeTableData();
  }

  initializeTableData() {		
    this.appointmentHttpService.getAppointmentWithServices(String(this.appointmentId)).subscribe((appointment) => {      
      if (appointment) {
        this.appointment = appointment;
        this.showTable = true;
      }
		});
  }

  suscribersModalForm() {
    this.addServiceForm.get("duration")?.valueChanges.subscribe(value => {
      if (value < 0) {
        this.addServiceForm.get("duration")?.setValue(0);
      } else if (value > 10) {
        this.addServiceForm.get("duration")?.setValue(10);
      }
    });

    this.addServiceForm.get("cost_of")?.valueChanges.subscribe(value => {
      if (value < 0) {
        this.addServiceForm.get("cost_of")?.setValue(0);
      }
    })
  }

  resetModalForm() {
    this.initializeTableData();

    this.addServiceForm.reset();
  }

  save() {
    if (!this.addServiceForm.valid)
      return;

    const service: Service = {
      appointment_id: this.appointmentId,
      employee_id: this.addServiceForm.get("employee_id")?.value,
      type_of: this.addServiceForm.get("type_of")?.value,
      cost_of: this.addServiceForm.get("cost_of")?.value,
      duration: this.addServiceForm.get("duration")?.value,
      is_completed: false,
    };

    this.appointmentHttpService.addService(service, this.userId).subscribe();    

    this.resetModalForm();
  }

  ngOnDestroy() {

  }

  return() {
		this.ngOnDestroy();
		this.location.back();
	}

}
