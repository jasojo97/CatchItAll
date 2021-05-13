import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {ModelModule} from "../model/model.module";
import {RouterModule} from "@angular/router";
import {CustomerProfileComponent} from "./customerProfile.component";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
    declarations: [CustomerProfileComponent],
    
})

export class CustomerProfileModule { }