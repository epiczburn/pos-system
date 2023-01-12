import { Component, OnInit } from '@angular/core';
import { Producttype } from '../store/services/producttype';
import { ApiService } from "../api.service";

@Component({
  selector: 'app-producttype',
  templateUrl: './producttype.component.html', 
  styleUrls: ['./producttype.component.css']
})
export class ProducttypeComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  products1: any[];

  products2: any['asd'];

  producttype: Producttype[];

  Producttype: Producttype; 

  selectedproducttype: any[];

  loading: any;

  itemtype: any[];

  productDialog: boolean;

  submitted: boolean;

  ngOnInit(): void {

    this.apiService.productType().subscribe((res: any)=>{
      if(res.success) {
          this.producttype = res.data 
          var itemtypeInner = []
          this.producttype.forEach((type => {
              // console.log(type.id)
              // console.log(type.name)
              itemtypeInner.push({name: type.name, code: type.id})
          }));
          this.itemtype = itemtypeInner
          this.loading = false
      } else  {
          alert(res.data)
      }
  })
  }

  openNew(){}

  editProduct(itemtype: Producttype) {
    this.itemtype = { ...this.producttype };
    this.productDialog = true;
    console.log(itemtype)
  }
  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
}

  saveProduct(){}

}
