import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];
    public shop: string
    public name: string
    public role: string

    // Button Visibility
    reportBtnVisible: boolean = true
    storeBtnVisible: boolean = true
    cameraBtnVisible: boolean = true
    lineBtnVisible: boolean = true
    companyBtnVisible: boolean = true
    userBtnVisible: boolean = true

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.setUserDetails();
        this.setButtonVisibility();
        this.setMenuItem();
    }

    setUserDetails(){
        this.shop = localStorage.getItem('user-shop') ? localStorage.getItem('user-shop') : null
        this.name = localStorage.getItem('user-profile') ? JSON.parse(localStorage.getItem('user-profile')).name : null
        this.role = localStorage.getItem('user-role') ? localStorage.getItem('user-role') : null
    }

    setButtonVisibility() {
        switch (this.role) {
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

    setMenuItem(){
        this.model = [
            {
                label: 'รายการเมนู',
                items: [
                    { label: 'คลังจัดการการสินค้า', icon: 'pi pi-shopping-bag', routerLink: ['/store'], visible: this.storeBtnVisible },
                    { label: 'สแกนขายสินค้า', icon: 'pi pi-fw pi-camera', routerLink: ['/camera'], visible: this.cameraBtnVisible },
                    { label: 'รายการยอดขาย', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/dashboard'], visible: this.reportBtnVisible },
                    { label: 'เชื่อมต่อ Line Notify', icon: 'pi pi-fw pi-link', routerLink: ['/linenotify'], visible: this.lineBtnVisible },
                    { label: 'จัดการร้านค้า', icon: 'pi pi-fw pi-home', routerLink: ['/company'], visible: this.companyBtnVisible },
                    { label: 'จัดการผู้ใช้', icon: 'pi pi-fw pi-user', routerLink: ['/users'], visible: this.userBtnVisible },
                ]
            },
        ];
    }
}
