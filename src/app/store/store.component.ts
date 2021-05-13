import {Component} from "@angular/core";
import {Vendor} from "../model/vendor.model";
import {VendorRepository} from "../model/vendor.repository";
import {Cart} from "../model/cart.model";


@Component({
    selector: "store",
    templateUrl: "store.component.html"
})

export class StoreComponent {
    public selectedCategory = null;
    public vendorsPerPage = 4;
    public selectedPage = 1;


    constructor(private repository: VendorRepository, private cart: Cart) { }

    get vendors(): Vendor[] {
        let pageIndex = (this.selectedPage - 1) * this.vendorsPerPage
        return this.repository.getVendors(this.selectedCategory).slice(pageIndex, pageIndex + this.vendorsPerPage);
    }

    get categories(): string[] {
        return this.repository.getCategories();
    }

    changeCategory(newCategory?: string) {
        this.selectedCategory = newCategory;
    }

    changePage(newPage: number) {
        this.selectedPage = newPage;
    }

    changePageSize(newSize: number) {
        this.vendorsPerPage = Number(newSize);
        this.changePage(1);
    }

    get pageCount(): number {
        return Math.ceil(this.repository.getVendors(this.selectedCategory).length / this.vendorsPerPage);
    }

    addVendorToCart(vendor: Vendor) {
        this.cart.addLine(vendor);
    }
}