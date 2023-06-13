import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-administration',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-administration.component.html',
  styleUrls: ['./customer-administration.component.css']
})
export class CustomerAdministrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
