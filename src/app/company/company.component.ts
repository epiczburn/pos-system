import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { Company } from './services/company';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
})
export class CompanyComponent implements OnInit {

  companys: Company[];

  selectedCompanys: Company[];

  company: Company;

  companysForSearch: Company[]

  loading: boolean = true;

  companyDialog: boolean;

  submitted: boolean;

  isNew: boolean = false

  constructor(private apiService: ApiService, private router: Router){
    var userRole = localStorage.getItem('user-role') ? localStorage.getItem('user-role') : null
    if(!userRole || userRole == 'user' || userRole == 'manager'){
      this.router.navigate([''])
    }
  }

  ngOnInit(): void {
    this.getItem()
  }

  getItem() {
    this.apiService.Companys().subscribe((res: any)=>{
      if(res.success) {
          this.companys = res.data
          this.companysForSearch = res.data
          this.loading = false
          
      } else  {
          alert(res.data)
      }
  })
  }

  openNew(){
    this.company = {}
    this.isNew = true
    this.companyDialog = true
    this.submitted = true
  }
  edit(company: Company) {
    this.company = { ...company };
    this.companyDialog = true;
  }
  hideDialog() {
    this.isNew = false
    this.companyDialog = false;
    this.submitted = false;
  }

  save() {
    if (this.isNew === true) {
      this.apiService.insertCompany(this.company).subscribe((res: any) => {
        if (res.success) {
          console.log(res.data)
          this.getItem()
          this.hideDialog()
        } else {
          alert(res.data)
        }
      })
    } else {
      this.apiService.updateCompany(this.company).subscribe((res: any) => {
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

  onSearchCompanys(event){
    this.companysForSearch = this.companys
    var searchCompanyName = event.target.value
    if(searchCompanyName){
      this.companysForSearch = this.companysForSearch.filter(item => (item.name.includes(searchCompanyName)));
    }
  }
}