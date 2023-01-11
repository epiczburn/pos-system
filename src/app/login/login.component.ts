import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from "../api.service";
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router,private apiService: ApiService) { }

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit(): void {}
  
  handleLogin() {
    this.apiService.login(this.loginForm.value).subscribe((res: any) =>{
      console.log('login',res)
      if(res.success){
        this.saveUserToLocalStorage(res.data)
        this.router.navigate(['store'])
      } else {
        alert("login failed")
      }
    })
  }

   saveUserToLocalStorage(user) {
    localStorage.setItem('user-profile', JSON.stringify(user));
  }
}
