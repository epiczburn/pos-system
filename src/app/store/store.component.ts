import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormArray } from '@angular/forms';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  public items: Array<any>
  public productTypes: Array<any>
  public loading: boolean
  public dialogForms: boolean
  public dialogDetailForms: boolean
  public confirmDialog: boolean
  public isNew: boolean
  public itemForms: FormGroup;
  public selectedDeleteItem: string;
  public itemsForSearch: Array<any>

  constructor(private apiService: ApiService, private fb: FormBuilder, private router: Router) {
    var userRole = localStorage.getItem('user-role') ? localStorage.getItem('user-role') : null
    if (!userRole || userRole == 'user') {
      this.router.navigate([''])
    }
  }

  ngOnInit(): void {
    this.itemForms = this.fb.group({});
    this.loading = true;
    this.getItems();
    this.getProductTypes();
    this.buildForms();
  }

  buildForms() {
    this.itemForms = this.fb.group({
      barcode: new FormControl(""),
      name: new FormControl(""),
      productTypeId: new FormControl(1),
      quantity: new FormControl(""),
      price: new FormControl(""),
      cost: new FormControl(""),
      img: new FormControl(null)
    })
  }

  // resetForms() {
  //   this.itemForms.reset();
  // }

  editItem(selected: any) {
    this.isNew = false;
    // const productType = this.productTypes.find(ele => {
    //   return ele.name == selected.productType.name
    // })

    this.itemForms = this.fb.group({
      id: new FormControl(selected.id),
      barcode: new FormControl(selected.barcode),
      name: new FormControl(selected.name),
      // productTypeId: new FormControl(productType.name),
      productTypeId: new FormControl(1),
      quantity: new FormControl(selected.quantity),
      price: new FormControl(selected.price),
      cost: new FormControl(selected.cost),
      img: new FormControl(selected.img)


    })
    this.handleDialog(true);
  }

  viewDetail(selected: any) {
    console.log(this)
    this.isNew = false;
    // const productType = this.productTypes.find(ele => {
    //   return ele.name == selected.productType.name
    // })

    this.itemForms = this.fb.group({
      id: new FormControl(selected.id),
      barcode: new FormControl(selected.barcode),
      name: new FormControl(selected.name),
      // productTypeId: new FormControl(productType.name),
      productTypeId: new FormControl(1),
      quantity: new FormControl(selected.quantity),
      price: new FormControl(selected.price),
      cost: new FormControl(selected.cost),
      img: new FormControl(selected.img)


    })
    this.handleViewDetailDialog(true);
  }

  async deleteItem() {
    const id = this.selectedDeleteItem;
    if (id) {
      
      this.apiService.deleteProduct(id).subscribe((res: any) => {
        if (res) {
          this.getItems({ refresh: true })
        }
      });

      this.handleConfirmDeleteDialog(false, null)
    }
  }

  getItems({ refresh = false } = {}) {
    if (refresh) {
      this.loading = true;
    }
    this.apiService.productList().subscribe((res: any) => {
      if (res.success) {
        this.items = res.data;
        this.itemsForSearch = res.data;
      }
      this.loading = false;
    })
  }

  async getProductTypes() {
    this.apiService.productType().subscribe((res: any) => {
      if (res.success) {
        this.productTypes = res.data;
      }
      this.loading = false;
    })
  }

  insertNewProduct() {
    // this.resetForms()
    this.buildForms();
    this.isNew = true;
    this.dialogForms = true;
  }

  onSubmit() {
    this.handleDialog(false);
    // this.itemForms.value.productTypeId = this.itemForms.value.productTypeId.id
    const value = { ...this.itemForms.value };
  
    if (this.isNew) {
      this.apiService.insertNewProduct(value).subscribe((res: any) => {
        if (res) {
          this.getItems({ refresh: true })
        }
      });
    } else {
      this.apiService.productUpdate(value).subscribe((res: any) => {
        if (res) {
          this.getItems({ refresh: true })
        }
      });
    }
    // this.resetForms()
    this.buildForms();
  }

  handleDialog(isOpen: boolean) {
    this.dialogForms = isOpen;
  }

  handleViewDetailDialog(isOpen: boolean) {
    this.dialogDetailForms = isOpen;
  }

  onSearchProduct(event: any) {
    this.itemsForSearch = this.items
    var searchProductNameOrBarcode = event.target.value
    if (searchProductNameOrBarcode) {
      this.itemsForSearch = this.itemsForSearch.filter(item => (item.name.includes(searchProductNameOrBarcode)) || (item.barcode.includes(searchProductNameOrBarcode)));
    }
  }
  readUrl(event:any) {
    // console.log(event)
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event: ProgressEvent) => {
        this.itemForms.value.img = reader.result.toString().split(',')[1];
      }
  
      reader.readAsDataURL(event.target.files[0]);
    }
  }


  handleConfirmDeleteDialog(isOpen: boolean, selected: any) {
    this.confirmDialog = isOpen;
    if(selected) {
      this.selectedDeleteItem = selected.id
    }
  }

}
