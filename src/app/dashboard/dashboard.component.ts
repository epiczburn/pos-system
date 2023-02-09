import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { Report } from './services/report';
import { Product } from '../store/services/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

    reports: Product[];

    reportsForSearch: Product[];

    // selectedReports: Report[];
  
    // report: Report;
  
    loading: boolean = true;
  
    companyDialog: boolean;
  
    submitted: boolean;

    rangeDates: Date[];

    totalSum: any;

    constructor(private apiService: ApiService, private router: Router){
        var userRole = localStorage.getItem('user-role') ? localStorage.getItem('user-role') : null
        if(!userRole || userRole == 'user'){
          this.router.navigate([''])
        }
    }

    ngOnInit() {
        this.rangeDates = [new Date(), new Date()]

        let startDate = new Date(this.rangeDates[0])
        let endDate = new Date(this.rangeDates[1])

        let dateRange = {
            startDate: startDate.toISOString().toString().substring(0, 10)+ " 00:00:00",
            endDate: endDate.toISOString().toString().substring(0, 10)+ " 23:59:59"
        }

        this.setProductReports(dateRange)
    }

    selecttable(){
        let startDate = new Date(this.rangeDates[0])
        startDate.setDate(startDate.getDate()+1)
        let endDate = new Date(this.rangeDates[1])
        endDate.setDate(endDate.getDate()+1)

        let dateRange = {
            startDate: startDate.toISOString().toString().substring(0, 10)+ " 00:00:00",
            endDate: endDate.toISOString().toString().substring(0, 10)+ " 23:59:59"
        }

        this.setProductReports(dateRange)
        
    }

    setProductReports(dateRange){
        this.apiService.Reports(dateRange).subscribe((res: any)=>{
            if(res.success) {
                this.reports = res.data.products
                this.reportsForSearch = res.data.products
                this.setTotalSum(res.data.products, res.data.total);

                this.loading = false
            } else  {
                alert(res.data)
            }
        })
    }

    setTotalSum(products, total){
        const formatter = new Intl.NumberFormat('th-TH', {
            style: 'currency',
            currency: 'THB',
        });

        this.totalSum = formatter.format(total);

        products.forEach(product => {
            product['totalSold'] = (product.total / product.quantity).toFixed(2);
        });
    }

    onSearchProduct(event: any){
        this.reportsForSearch = this.reports
        var searchReport = event.target.value
        if(searchReport){
            this.reportsForSearch = this.reportsForSearch.filter(item => item.name.includes(searchReport))
        }
    }
}