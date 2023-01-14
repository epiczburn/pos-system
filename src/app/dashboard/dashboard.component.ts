import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppConfig } from './services/appconfig';
import { AppConfigService } from './services/appConfigService';
import { DashboardService } from './services/dashboard.service';
import { Product } from '../store/services/product';
import { ApiService } from "../api.service";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data: any;

  chartOptions: any;

  subscription: Subscription;

  config: AppConfig;

  cols: any[];

  dash: any[];

  products: Product[];

  product: Product;
  


  

  constructor(private configService: AppConfigService,private service: DashboardService, private apiService: ApiService) {}

  ngOnInit() {
      
    this.apiService.productList().subscribe((res: any)=>{
        if(res.success) {
            this.products = res.data
        } else  {
            alert(res.data)
        }
    })
    
    
    
    
    
    
    
    this.data = {
          labels: ['ขนมขบเคี้ยว','น้ำดื่ม','น้ำอัดลม','แอลฮอล์','ของใช้ทั่วไป','อู๊ดๆปุ'],
          datasets: [
              {
                  data: [12, 24, 8, 13, 27, 16],
                  backgroundColor: [
                      "#42A5F5",
                      "#66BB6A",
                      "#FFA726",
                      "#74c2bb",
                      "#ab4d7f",
                      "#FF3336",
                  ],
                  hoverBackgroundColor: [
                      "#64B5F6",
                      "#81C784",
                      "#FFB74D",
                      "#cee6e5",
                      "#cf6ba9",
                      "#FF8587"
                  ]
              }
          ]
      };

      this.config = this.configService.config;
      this.updateChartOptions();
      this.subscription = this.configService.configUpdate$.subscribe(config => {
          this.config = config;
          this.updateChartOptions();
      });


  }

  updateChartOptions() {
      this.chartOptions = this.config && this.config.dark ? this.getDarkTheme() : this.getLightTheme();
  }

  getLightTheme() {
      return {
          plugins: {
              legend: {
                  labels: {
                      color: '#495057'
                  }
              }
          }
      }
  }

  getDarkTheme() {
      return {
          plugins: {
              legend: {
                  labels: {
                      color: '#ebedef'
                  }
              }
          }
      }
  }

}


// ----------------------------

