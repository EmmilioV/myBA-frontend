import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { AbstractControl, FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeService } from 'src/services/employee.service';
import { EmployeeWithServices } from 'src/models/employee/employeeWithServices.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [
	  CommonModule,
	  ReactiveFormsModule,
	  FormsModule,
    ],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
	tableForm: FormGroup;
	showTable: boolean = false;
	
	employee: EmployeeWithServices;

	userId: string | null = "";

	constructor(
		private fb: FormBuilder,
		private route: ActivatedRoute,
		private location: Location,
		private employeeHttp: EmployeeService,
	) {
		this.employee = new EmployeeWithServices;

		this.tableForm = this.fb.group({
			rows: this.fb.array([])
		});
	}

	ngOnInit(): void { 
		this.userId = this.route.snapshot.queryParamMap.get("userId");
		this.initializeTableForm();
	}
	
	ngOnDestroy(): void {}

	initializeTableForm() {		
		this.employeeHttp.getEmployeeWithServices(String(this.userId)).subscribe((employee) => {
			this.employee = employee;
			this.employee.services?.forEach(s => {
				this.rows.push(
					this.fb.group({
						id: [s.service_id],
						customer_name: [s.customer_name],
						date_of: [s.date_of],
						type_of: [s.type_of],
						cost_of: [s.cost_of],
						duration: [s.duration, Validators.required],
						is_completed: [s.is_completed, Validators.required],
						observations: [s.observations, Validators.required]
					})
				);
			});
			this.showTable = true;
		});
	}

	get rows() {
		return this.tableForm.get("rows") as FormArray;
	}

	editRow(row: AbstractControl<any, any>) {	
		this.employeeHttp.updateEmployeeService(row.value, String(this.userId)).subscribe(() => {})
	}

	return() {
		this.ngOnDestroy();
		this.location.back();
	}
}
