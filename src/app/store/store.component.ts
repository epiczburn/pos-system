import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { FormBuilder, FormControl, FormGroup,FormArray } from '@angular/forms';

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
  public isNew: boolean
  public itemForms: FormGroup;
  constructor(private apiService: ApiService, private fb: FormBuilder) { }

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
      productTypeId: new FormControl(""),
      quantity: new FormControl(""),
      price: new FormControl(""),
      cost: new FormControl(""),
      // img: new FormControl("")
    })
  }

  resetForms() {
    this.itemForms.reset();
  }

  editItem(selected: any) {
    this.isNew = false;
    const productType = this.productTypes.find(ele => {
      return ele.name == selected.productType.name
    })

    this.itemForms = this.fb.group({
      id: new FormControl(selected.id),
      barcode: new FormControl(selected.barcode),
      name: new FormControl(selected.name),
      productTypeId: new FormControl(productType.name),
      quantity: new FormControl(selected.quantity),
      price: new FormControl(selected.price),
      cost: new FormControl(selected.cost),
      // img: new FormControl(selected.img)
      
      
    })
    this.handleDialog(true);
  }

  async deleteItem(selected: any) {
    const { id } = selected;
    this.apiService.deleteProduct(id).subscribe((res: any) => {
      if (res) {
        this.getItems({ refresh: true })
      }
    });
  }

  getItems({ refresh = false } = {}) {
    if (refresh) {
      this.loading = true;
    }
    this.apiService.productList().subscribe((res: any) => {
      if (res.success) {
        this.items = res.data;
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
    this.resetForms();
    this.isNew = true;
    this.dialogForms = true;
    console.log(this.resetForms)
  }

  onSubmit() {
    this.handleDialog(false);
    this.itemForms.value.productTypeId = this.itemForms.value.productTypeId.id
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
    this.resetForms();
  }

  handleDialog(isOpen: boolean) {
    this.dialogForms = isOpen;
  }

}
