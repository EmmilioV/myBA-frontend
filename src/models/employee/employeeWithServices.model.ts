import { Service } from '../service/service.model';

export class EmployeeWithServices{
    constructor(
        public id?: string,
        public name?: string,
        public email?: string,
        public services?: Service[]
    ) {}
}