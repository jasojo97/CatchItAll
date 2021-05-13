import {Injectable} from "@angular/core";
import {Customer} from "./customer.model";
import {StaticDataSource} from "./static.datasource";

@Injectable()

export class CustomerRepository {
    private customers: Customer[] = [];

    constructor(private dataSource: StaticDataSource) {
        dataSource.getCustomers().subscribe(data => {
            this.customers=data;
        });
    }

    getCustomer(id: number): Customer {
        return this.customers.find(p => p.customerId == id);
    }
}