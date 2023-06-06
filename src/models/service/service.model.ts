export class Service{
    constructor(
        public service_id: number,
        public customer_name: string,
        public date_of: Date,
        public type_of: string,
        public cost_of: number,
        public duration: number,
        public is_completed: boolean,
        public observations: string
    ) {}
}