export class Payment{
    constructor(
        public payment_id?: number,
        public customer_id?: number,
        public amount?: number,
        public payment_type?: string
    ){}
}