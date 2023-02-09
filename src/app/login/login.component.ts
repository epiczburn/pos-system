import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from "../api.service";
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})

export class LoginComponent {
    constructor(public layoutService: LayoutService,private router: Router,private apiService: ApiService) { }
  
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
          this.getCompanys(res.data)
        } else {
          console.log(JSON.stringify(res))
          alert("login failed")
        }
      })
    }
  
    getCompanys(user){
      this.apiService.Companys().subscribe((res: any) => {
        if (res.success) {
          let company = res.data
          company.forEach(element => {
            if(user.companyId == element.id){
              this.saveCompanyToLocalStorage(element.name)
            }
          });
          this.getRoles(user)
        }
      })
    }
  
    getRoles(user){
      this.apiService.getRoles().subscribe((res: any) => {
        if (res.success) {
          let role = res.data
          role.forEach(element => {
            if(user.roleId == element.id){
              this.saveRoleToLocalStorage(element.name)
  
              if(element.name == 'user'){
                this.router.navigate(['camera'])
              }
              else{
                this.router.navigate(['store'])
              }
            }
          });
        }
      })
    }
  
    saveCompanyToLocalStorage(company){
      localStorage.setItem('user-shop', company);
    }
  
    saveRoleToLocalStorage(role){
      localStorage.setItem('user-role', role);
    }
  
    saveUserToLocalStorage(user) {
      localStorage.setItem('user-profile', JSON.stringify(user));
      this.apiService.refreshToken()
    }
  }