export class Vendor {
    constructor(
        public vendorId?: number,
        public vendorName?: string,
        public vendorService?:string,
        public vendorCategory?: string,
        public vendorAddress?: string,
        public vendorNumber?: string,
        public reviewId?: number,
        public price?: number,
        public image?: File
         //public vendorDescription?: string,
        //public image_url?: string,

    ) { }
}