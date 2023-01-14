import { Component, OnInit } from '@angular/core';
import { Producttype } from './services/producttype';
import { ApiService } from "../api.service";

@Component({
  selector: 'app-producttype',
  templateUrl: './producttype.component.html',
  styleUrls: ['./producttype.component.css']
})
export class ProducttypeComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  producttypes: Producttype[];

  selectedProducttypes: Producttype[];

  producttype: Producttype;

  loading: boolean;

  productDialog: boolean;

  submitted: boolean;

  isNew: boolean = false

  ngOnInit(): void {
    this.getItem()
  }

  getItem() {
    this.apiService.productType().subscribe((res: any) => {
      if (res.success) {
        console.log(res.data)
        this.producttypes = res.data
        this.loading = false

      } else {
        alert(res.data)
      }
    })
  }

  openNew() {
    this.producttype = {}
    this.isNew = true
    this.productDialog = true
    this.submitted = true
  }

  edit(producttype: Producttype) {
    this.producttype = { ...producttype };
    this.productDialog = true;
  }
  hideDialog() {
    this.isNew = false
    this.productDialog = false;
    this.submitted = false;
  }

  save() {
    if (this.isNew === true) {
      this.apiService.insertProductType(this.producttype).subscribe((res: any) => {
        if (res.success) {
          console.log(res.data)
          this.getItem()
          this.hideDialog()
        } else {
          alert(res.data)
        }
      })
    } else {
      this.apiService.updateProductType(this.producttype).subscribe((res: any) => {
        if (res.success) {
          console.log(res.data)
          this.getItem()
          this.hideDialog()
        } else {
          alert(res.data)
        }
      })
    }

  }
}
