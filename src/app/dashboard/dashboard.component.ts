import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { Report } from './services/report';
import { Product } from '../store/services/product';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    reports: Report[];

    reportsForSearch: Report[];

    selectedReports: Report[];
  
    report: Report;
  
    loading: boolean = true;
  
    companyDialog: boolean;
  
    submitted: boolean;

    rangeDates: Date[];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
      let data = {
        startDate: "2023-01-09 00:00:00",
        endDate: "2023-01-15 23:59:59"
     }
    this.apiService.Reports(data).subscribe((res: any)=>{
        if(res.success) {
            this.reports = res.data.products
            this.loading = false
            console.log(res.data)
        } else  {
            alert(res.data)
        }
    })
    }

    selecttable(){
    // console.log(this.rangeDates)
    let startDate = new Date(this.rangeDates[0])
    startDate.setDate(startDate.getDate()+1)
    let endDate = new Date(this.rangeDates[1])
    endDate.setDate(endDate.getDate()+1)

    // console.log(startDate.toISOString().toString().substring(0, 10))

    let data = {
        startDate: startDate.toISOString().toString().substring(0, 10)+ " 00:00:00",
        endDate: endDate.toISOString().toString().substring(0, 10)+ " 23:59:59"
    }

    this.apiService.Reports(data).subscribe((res: any)=>{
        if(res.success) {
            this.reports = res.data.products
            this.loading = false
            // console.log(res.data)
        } else  {
            alert(res.data)
        }
    })
    }

    onSearchProduct(event: any){
        this.reportsForSearch = this.reports
        // var searchReport = event.target.value
        // if(searchReport){
        //     var productList = []
        //     for(let product in this.reportsForSearch){
        //         var productSearch = this.reportsForSearch[product] as Product
        //         productList.push(productSearch)
        //     }

        //     this.reportsForSearch = productList.filter(item => item.name.includes(searchReport)) as Report[]
        // }
    }
}