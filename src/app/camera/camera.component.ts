import { HttpClient } from '@angular/common/http';
import { Component, OnInit ,ViewChild, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BarcodeScannerLivestreamComponent } from "ngx-barcode-scanner";
import { ApiService } from "../api.service";
import { Product } from '../store/services/product';
import { BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {
  @ViewChild(BarcodeScannerLivestreamComponent)
  barcodeScanner: BarcodeScannerLivestreamComponent;

  allowedFormats = [ BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13, BarcodeFormat.CODE_128, BarcodeFormat.DATA_MATRIX /*, ...*/ ];

  barcodeValue;

  products: Product[];

  sales: any[] = []

  loading: boolean = true;

  cameraReady: boolean = true;


 constructor( private apiService: ApiService) { }

 ngOnInit() {
  this.apiService.productList().subscribe((res: any) => {
      console.log(res)
      if (res.success) {
          this.products = res.data;
          this.loading = false;
      } else {

      }
  })


}
scanCompleteHandler(barcode){
  this.cameraReady = false
  console.log(barcode)
  console.log('prod list: ',this.products)
    setTimeout(() => {
      let product: any
      product = this.products.find((element) => element.barcode == barcode)

      // check find product not found
      if (!product) {
        alert('ไม่พบสินค้าดังกล่าว!!')
        this.cameraReady = true
        return
      }

      product.quantity = 1
      this.sales.push(product)

      this.cameraReady = true
        console.log("camera ready")
      }, 1000);
}

confirmSale(){
 console.log("confirm แล้ว")
 let object = {
    products:[],
    paymentTypeId : 1
 }

 this.sales.forEach(element => {
   const product = {
    barcode : element.barcode,
    quantity: element.quantity
   }
   object.products.push(product)
 });

 console.log(object)

 this.apiService.confirmSale(object).subscribe((res: any) => {
  console.log(res)
  if (res.success) {
      this.sales = []
      this.loading = false;
  } else {
    console.log(res)
    alert("error")
  }
})


}

cancelList(){
  this.sales = []
}
 
}                 
  