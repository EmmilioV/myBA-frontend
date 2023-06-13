import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-administration',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-administration.component.html',
  styleUrls: ['./employee-administration.component.css']
})
export class EmployeeAdministrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
