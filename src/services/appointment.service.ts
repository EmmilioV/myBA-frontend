import { Observable, catchError, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { variables } from 'src/environments/environment';
import { AppointmentWithServicesInfo } from 'src/models/appointments/appointment.model';
import { Service } from 'src/models/service/service.model';

@Injectable({ providedIn: 'root' })
export class APpointmentService {
    private appointmentUrl = `${variables.backend_url}/v1/appointment`;

    constructor(
        private http: HttpClient,
    ) {
        
    }

    getAppointmentWithServices(appointmentId: string): Observable<AppointmentWithServicesInfo> {
        return this.http.get<AppointmentWithServicesInfo>(`${this.appointmentUrl}/with-services/${appointmentId}`)
        .pipe(
            catchError(this.handleError<AppointmentWithServicesInfo>())
        );
    }

    addService(service: Service, userId: string): Observable<any> {
        const headers = {
            user_id: userId,
        }

        return this.http.post(`${this.appointmentUrl}/add-service`, service, {headers: headers})
        .pipe(
            catchError(this.handleError<AppointmentWithServicesInfo>())
        );
    }

    private handleError<T>(result?: T) {
        return (error: any): Observable<T> => {
      
          console.error(error);
      
          return of(result as T);
        };
    }
}