import { Service } from '../service/service.model';

export class AppointmentWithExtraInfo{
    constructor(
        public appointment_id: string,
        public customer_id: string,
        public customer_name: string,
        public date_of: Date,
        public total_cost: number,
        public total_duration: number,
    ) {}
}

export class AppointmentWithServicesInfo{
    constructor(
        public appointment_id?: string,
        public customer_id?: string,
        public customer_name?: string,
        public date_of?: Date,
        public total_duration?: number,
        public total_cost?: number,
        public services?: Service[],
    ) {}
}