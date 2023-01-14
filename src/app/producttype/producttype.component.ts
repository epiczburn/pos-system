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

  ngOnInit(): void {
    this.apiService.productType().subscribe((res: any)=>{
      if(res.success) {
          this.producttypes = res.data
          this.loading = false
          
      } else  {
          alert(res.data)
      }
  })
  }

  openNew(){}

  editProduct(producttype: Producttype) {
    this.producttype = { ...this.producttype };
    this.productDialog = true;
    console.log(producttype)
  }
  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
}

  saveProduct(){}

}
