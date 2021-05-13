import {Component} from "@angular/core";
import {NgForm} from "@angular/forms";
import {Order} from "../model/order.model";
//Orders repository location

@Component({
    templateUrl: "checkout.component.html",
    styleUrls: ["checkout.component.css"]
})

export class CheckoutComponent { 
    orderDate: Date;
    status: string;
    shipmentDate: Date;
    Address: string;

    constructor(public order: Order) {}

    submitFinalServiceOrder(form: NgForm) {
        this.status = "Ordered"

        if (form.valid) {
            //need order data
        }

    }

    serviceOrderDeliveryStatus(form: NgForm) {

    }
}