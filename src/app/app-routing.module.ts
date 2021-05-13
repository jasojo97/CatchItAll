import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CustomerProfileComponent } from './customerProfile/customerProfile.component';
import {StoreComponent} from './store/store.component';
import {CreateVendorProfileComponent} from './vendorProfile/createVendorProfile.component';
import { VendorProfileComponent } from './vendorProfile/vendorProfile.component';

const routes: Routes = [
    //{path: "vendorProfile/:vendorId", component: VednorProfileComponent},
  {path: "createVendorProfile", component: CreateVendorProfileComponent},
  {path: "allVendors", component: VendorProfileComponent},
  {path: "createCustomerProfile", component: CustomerProfileComponent},
  {path: "", component: StoreComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

export const routingComponents = [StoreComponent]