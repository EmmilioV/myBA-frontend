import { Observable, catchError, of } from 'rxjs';
import { EmployeeWithServices } from 'src/models/employee/employeeWithServices.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from 'src/models/service/service.model';
import { variables } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
    private employeeUrl = `${variables.backend_url}/v1/employee`;

    constructor(
        private http: HttpClient,
    ) {
        
    }

    getEmployeeWithServices(employeeId: string): Observable<EmployeeWithServices> {
        return this.http.get<EmployeeWithServices>(`${this.employeeUrl}/by-id/with-services/${employeeId}`)
        .pipe(
            catchError(this.handleError<EmployeeWithServices>())
        );
    }

    updateEmployeeService(service: Service, employeeId: string): Observable<any> {
        const body = JSON.stringify(service)
        const headers = {
            employee_id: employeeId,
        }

        return this.http.put(
            `${this.employeeUrl}/update-service`,
            body,
            {
                headers: headers
            }
        )
        .pipe(
            catchError(this.handleError<any>())
        );
    }

    private handleError<T>(result?: T) {
        return (error: any): Observable<T> => {
      
          console.error(error);
      
          return of(result as T);
        };
    }
}