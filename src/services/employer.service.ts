import { Observable, catchError, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { variables } from 'src/environments/environment';
import { EmployerWithAppointments } from 'src/models/employer/EmployerWithAppointments.model';

@Injectable({ providedIn: 'root' })
export class EmployerService {
    private employeeUrl = `${variables.backend_url}/v1/employer`;

    constructor(
        private http: HttpClient,
    ) {
        
    }

    getEmployerWithAppointments(employerId: string): Observable<EmployerWithAppointments> {
        return this.http.get<EmployerWithAppointments>(`${this.employeeUrl}/appointment/all-by-me/${employerId}`)
        .pipe(
            catchError(this.handleError<EmployerWithAppointments>())
        );
    }

    private handleError<T>(result?: T) {
        return (error: any): Observable<T> => {
      
          console.error(error);
      
          return of(result as T);
        };
    }
}