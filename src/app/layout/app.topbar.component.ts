import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { ApiService } from "../api.service";
import { Router } from '@angular/router';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    items!: MenuItem[];

    constructor(public layoutService: LayoutService, private apiService: ApiService, private router: Router) { }

    logout() {
        if (confirm('ยืนยันการออกจากระบบ')) {
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
    }

    removeUserInLocalStorage() {
        localStorage.removeItem('user-shop');
        localStorage.removeItem('user-profile');
        localStorage.removeItem('user-role');
    }
}
