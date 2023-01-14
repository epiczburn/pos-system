import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { PrimeNGConfig } from 'primeng/api';
import { ApiService } from "../api.service";
import { Product } from './services/product';
import { Producttype } from './services/producttype';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-store',
    templateUrl: './store.component.html',
    styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {


    selectedProducts: Product[];
    products: Product[];
    product: Product;
    productDialog: boolean;
    submitted: boolean;
    selectedproducttype: any[];
    itemtype: any[];
    producttype: Producttype[];
    loading: boolean = true;

    @ViewChild('dt') table: Table;

    constructor(private primengConfig: PrimeNGConfig, private apiService: ApiService, private fb: FormBuilder) {}

    ngOnInit() {
        
        this.apiService.productList().subscribe((res: any)=>{
            if(res.success) {
                this.products = res.data
                this.loading = false
            } else  {
                alert(res.data)
            }
        })

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

    deleteProduct(product) { }
    editProduct(product: Product) {
        this.product = { ...product };
        this.productDialog = true;
    }

    hideDialog() {
        this.productDialog = false;
        this.submitted = false;
    }
    openNew(){}


    saveProduct(product) {
        this.producttype.forEach((type => {
            if (type.name == product.productType.name){
                console.log(type.id)
                product.productTypeId = type.id
                
            }
            
        }));
        delete product["productType"]
        delete product["company"]
        delete product["img"]
        
        console.log(product)
        this.apiService.productUpdate(product).subscribe((res: any)=>{
            console.log(res)
        })
        if (confirm("แก้ไขรายการเสร็จสิ้น")) {
            this.productDialog = false;
          }
    }


    
}
