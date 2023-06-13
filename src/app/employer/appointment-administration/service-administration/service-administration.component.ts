import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormsModule } from '@angular/forms';

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
export class ServiceAdministrationComponent implements OnInit {
	showTable: boolean = false;

	userId: string | null = "";

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      p => this.userId = p["userId"]
    );
  }

}
