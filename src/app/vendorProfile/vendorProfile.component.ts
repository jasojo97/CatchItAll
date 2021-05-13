import {Component} from "@angular/core";
import {Vendor} from "../model/vendor.model";
import {VendorRepository} from "../model/vendor.repository";
import {Cart} from "../model/cart.model";


@Component({
    selector: "store",
    templateUrl: "store.component.html"
})

export class VendorProfileComponent {
    public selectedVendor = null;
    public vendorsPerPage = 9;
    public selectedPage = 1;


    constructor(private repository: VendorRepository, private vendor: Vendor) { }

    get vendors(): Vendor[] {
        let pageIndex = (this.selectedPage - 1) * this.vendorsPerPage
        return this.repository.getVendorsByName(this.selectedVendor).slice(pageIndex, pageIndex + this.vendorsPerPage);
    }

    
}