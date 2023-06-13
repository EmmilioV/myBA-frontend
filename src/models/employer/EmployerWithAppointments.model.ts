import { AppointmentWithExtraInfo } from '../appointments/appointment.model';

export class EmployerWithAppointments{
    constructor(
        public id?: string,
        public name?: string,
        public appointments?: AppointmentWithExtraInfo[]
    ) {}
}