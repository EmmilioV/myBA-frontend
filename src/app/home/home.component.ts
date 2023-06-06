import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeService } from 'src/services/employee.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
			userId: ['', Validators.required]
		});
  }

  ngOnInit(): void {
  }

  searchEmployeeDataAndRedirect() {
    this.router.navigate(['employee'], {queryParams: {userId: this.id}})
  }

  searchEmployerDataAndRedirect() {

  }

  get id() {
    return this.loginForm.get("userId")?.value
  }
}
