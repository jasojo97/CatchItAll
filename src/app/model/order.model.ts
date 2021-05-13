import {Injectable} from "@angular/core";
import {Cart}  from "./cart.model";

@Injectable()
export class Order {
    public order_id: number;
    public customer_id: number;
    public orderDate: Date=new Date("1/1/2021");
    public status: string;
    public shimpmentDate: Date= new Date ("12/31/2021");
    public address: string;


    constructor(public cart: Cart,
        public order_id1: number,
    public customer_id2: number,
    public orderDate3: Date=new Date("1/1/2021"),
    public status4: string,
    public shipmentDate5: Date= new Date ("12/31/2021"),
    public address6: string) { }

    clear() {
        this.order_id=this.customer_id=null;

        this.orderDate=this.shimpmentDate=null;

        this.status=null;
        
        this.address=null;



    }
}