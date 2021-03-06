import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {ModelModule} from "../model/model.module";
import {RouterModule} from "@angular/router";
import {CreateVendorProfileComponent} from "./createVendorProfile.component";
import {VendorProfileComponent} from "./vendorProfile.component";



@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
    declarations: [CreateVendorProfileComponent, VendorProfileComponent],
    exports: [VendorProfileComponent]
})

export class VendorProfileModule { }