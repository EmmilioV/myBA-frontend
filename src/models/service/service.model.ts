export class Service{
    constructor(
        public service_id?: number,
        public appointment_id?: string,
        public customer_name?: string,
        public employee_id?: string,
        public date_of?: Date,
        public type_of?: string,
        public cost_of?: number,
        public duration?: number,
        public is_completed?: boolean,
        public observations?: string
    ) {}
}