import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { Company } from './services/company';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  companys: Company[];

  selectedCompanys: Company[];

  company: Company;

  loading: boolean = true;

  productDialog: boolean;

  submitted: boolean;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.Companys().subscribe((res: any)=>{
      if(res.success) {
          this.companys = res.data
          this.loading = false
          
      } else  {
          alert(res.data)
      }
  })
  }
  openNew(){}
  editProduct(company: Company) {
    this.company = { ...company };
    this.productDialog = true;
    console.log(company)
}
  
  saveProduct(){}
  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }
}
