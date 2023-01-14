import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import {ImageModule} from 'primeng/image';

@Component({
  selector: 'app-linenotify',
  templateUrl: './linenotify.component.html',
  styleUrls: ['./linenotify.component.css']
})
export class LinenotifyComponent implements OnInit {

  Addtoken: string;

  token: string = "";

  constructor(private apiService: ApiService) { }

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
          alert("login failed")
        }
      })

    }
    }
