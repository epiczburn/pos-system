import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from "../api.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  public shop : string
  public username : string
  public role : string

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    var userShop = localStorage.getItem('user-shop') ? localStorage.getItem('user-shop') : null
    var userProfile = localStorage.getItem('user-profile') ? JSON.parse(localStorage.getItem('user-profile')) : null
    var userRole = localStorage.getItem('user-role') ? localStorage.getItem('user-role') : null
    this.shop = userShop
    this.username = userProfile.name
    this.role = userRole
  }

  logout(){
    this.apiService.logout().subscribe((res: any) => {
      if (res.success) {
        alert('Logout สำเร็จ')
        this.removeUserInLocalStorage()
        this.router.navigate([''])
      } else {
        alert('เกิดข้อผิดพลาดในการ Logout!')
      }
    })
  }

  removeUserInLocalStorage(){
    localStorage.removeItem('user-shop');
    localStorage.removeItem('user-profile');
    localStorage.removeItem('user-role');
  }

}
