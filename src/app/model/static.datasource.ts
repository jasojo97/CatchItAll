import {Injectable} from "@angular/core";
import {Vendor} from "./vendor.model";
import {Observable, from} from "rxjs";
import {Customer} from "./customer.model";


@Injectable()
export class StaticDataSource {
    private vendors: Vendor[] /**= [new Vendor(1, "Lawn Mowing", "Home Care Service", "Long Grass Services", 100), 
    new Vendor(2, "House Cleaning", "Home Care Service", "House Maid Inc.", 37),new Vendor(3, "Window Cleaning", "Home Care Service", "Window Cleaners Central", 100),
    new Vendor(4, "Carpet/Window Cleaning", "Business Care Service", "Dual Cleaning Services", 100)];
*/
    private customers: Customer[];

    getVendors(): Observable<Vendor[]> {

        return from([this.vendors]);

    }

    getCustomers(): Observable<Customer[]> {
        return from([this.customers]);
    }

}
