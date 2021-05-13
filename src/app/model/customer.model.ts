export class Customer {
    constructor(
        public customerId?: number,
        public firstName?:string,
        public lastName?: string,
        //public vendorDescription?: string,
        //public image_url?: string,
        public address?: string,
        public number?: number,
        public email?: string,
        public order_id?:number,
        public vendor_id?: number,
        public payment_id?: number
        
        
    ) { }
}