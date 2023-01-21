import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { ApiService } from "../api.service";

@Component({
    selector: 'app-menubar',
    templateUrl: './menubar.component.html',
    styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

    // ````````````````````````````````````````````
    // ```````````````` Logout bar ````````````````
    // ````````````````````````````````````````````
    public shop: string
    public username: string
    public role: string
    
    // ````````````````````````````````````````````
    // ````````````````` Menu bar `````````````````
    // ````````````````````````````````````````````
    reportBtnVisible : boolean = true
    storeBtnVisible : boolean = true
    cameraBtnVisible : boolean = true
    lineBtnVisible : boolean = true
    companyBtnVisible : boolean = true
    userBtnVisible : boolean = true

    constructor(private apiService: ApiService, private router: Router) { }

    items: MenuItem[];

    ngOnInit(): void {
        // ````````````````````````````````````````````
        // ```````````````` Logout bar ````````````````
        // ````````````````````````````````````````````
        var userShop = localStorage.getItem('user-shop') ? localStorage.getItem('user-shop') : null
        var userProfile = localStorage.getItem('user-profile') ? JSON.parse(localStorage.getItem('user-profile')) : null
        var userRole = localStorage.getItem('user-role') ? localStorage.getItem('user-role') : null
        this.shop = userShop
        this.username = userProfile.name
        this.role = userRole

        // ````````````````````````````````````````````
        // ````````````````` Menu bar `````````````````
        // ````````````````````````````````````````````
        this.setButtonVisibility()
        this.setMenuItem()
    }
    
    // ````````````````````````````````````````````
    // ````````````````` Menu bar `````````````````
    // ````````````````````````````````````````````
    setMenuItem(){
        this.items = [
            {
                label: 'รายการยอดขาย',
                icon: 'pi pi-fw pi-chart-bar',
                routerLink: ['/dashboard'],
                visible: this.reportBtnVisible
            },
            {
                label: 'รายการสินค้า',
                icon: 'pi pi-fw pi-shopping-cart',
                routerLink: ['/store'],
                visible: this.storeBtnVisible
            },
            {
                label: 'สแกนสินค้า',
                icon: 'pi pi-fw pi-camera',
                routerLink: ['/camera'],
                visible: this.cameraBtnVisible
            },
            {
                label: 'เชื่อมต่อ LineNotify',
                icon: 'pi pi-fw pi-arrow-right-arrow-left',
                routerLink: ['/linenotify'],
                visible: this.lineBtnVisible
            },
            {
                label: 'แก้ไขร้านค้า',
                icon: 'pi pi-fw pi-home',
                routerLink: ['/company'],
                visible: this.companyBtnVisible
            },
            {
                label: 'แก้ไขผู้ใช้',
                icon: 'pi pi-fw pi-user-edit',
                routerLink: ['/users'],
                visible: this.userBtnVisible
            }
        ];
    }

    setButtonVisibility(){
      var userRole = localStorage.getItem('user-role') ? localStorage.getItem('user-role') : null
      switch(userRole){
        case 'manager': 
          this.companyBtnVisible = false
          this.userBtnVisible = false
          break
        case 'user': 
          this.reportBtnVisible = false
          this.storeBtnVisible = false
          this.lineBtnVisible = false
          this.companyBtnVisible = false
          this.userBtnVisible = false
          break
      }
    }

    // ````````````````````````````````````````````
    // ```````````````` Logout bar ````````````````
    // ````````````````````````````````````````````
    logout() {
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

    removeUserInLocalStorage() {
        localStorage.removeItem('user-shop');
        localStorage.removeItem('user-profile');
        localStorage.removeItem('user-role');
    }

}
