import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ReactiveFormsModule } from '@angular/forms'
import { DashboardComponent } from './dashboard.component';
import { BarcodeScannerLivestreamModule } from "ngx-barcode-scanner";
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { PasswordModule } from 'primeng/password';
import { PanelMenuModule } from 'primeng/panelmenu';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        ButtonModule,
        MenuModule,
        CheckboxModule,
        InputTextModule,
        BarcodeScannerLivestreamModule,
        ZXingScannerModule,
        TableModule,
        FormsModule,
        CalendarModule,
        ReactiveFormsModule,
        PanelMenuModule,
        PasswordModule,
        DialogModule
    ],
    declarations: [DashboardComponent]
})
export class DashboardModule { }
