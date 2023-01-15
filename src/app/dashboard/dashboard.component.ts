import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { Report } from './services/report';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    reports: Report[];

    selectedReports: Report[];
  
    report: Report;
  
    loading: boolean = true;
  
    companyDialog: boolean;
  
    submitted: boolean;
  
  

  constructor(private apiService: ApiService) {}

  ngOnInit() {
      
    this.apiService.Reports().subscribe((res: any)=>{
        if(res.success) {
            this.reports = res.data
        } else  {
            alert(res.data)
        }
    })
    
    
    
    
    
    
    
    

}

}