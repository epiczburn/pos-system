import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import {ImageModule} from 'primeng/image';
import { Router } from '@angular/router';

@Component({
  selector: 'app-linenotify',
  templateUrl: './linenotify.component.html',
})
export class LinenotifyComponent implements OnInit {

  Addtoken: string;

  token: string = "";

  constructor(private apiService: ApiService, private router: Router){
    var userRole = localStorage.getItem('user-role') ? localStorage.getItem('user-role') : null
    if(!userRole || userRole == 'user'){
      this.router.navigate([''])
    }
  }

  ngOnInit(): void {
    
  }
  addtoken(){
    console.log(this.token)
    
    const linetoken = {
      "lineToken": this.token
    }
      this.apiService.addlinetoken(linetoken).subscribe((res: any) =>{
       
        if(res.success){
          console.log(res)
        } else {
          alert("ผิดพลาด")
        }
      })

    }
    }
