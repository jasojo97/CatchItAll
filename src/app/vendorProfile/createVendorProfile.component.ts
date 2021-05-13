import {Component, Inject} from "@angular/core";
import {NgForm} from "@angular/forms";
import {Vendor} from "../model/vendor.model";
import {VendorRepository} from "../model/vendor.repository";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
    selector: "createVendor",
    template: "createVendorProfile.component.html"
})

export class CreateVendorProfileComponent {

    vendor: Vendor = new Vendor();

    editing: boolean = false;

    constructor(public vendorAdd: VendorRepository, activeRoute: ActivatedRoute, public router: Router)
    {
        
    }

}