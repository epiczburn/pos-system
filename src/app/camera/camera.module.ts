import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CameraRoutingModule } from './camera-routing.module';
import { ReactiveFormsModule } from '@angular/forms'
import { CameraComponent } from './camera.component';
import { BarcodeScannerLivestreamModule, BarcodeScannerLivestreamComponent } from 'ngx-barcode-scanner';
import { ZXingScannerModule  } from '@zxing/ngx-scanner';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { PasswordModule } from 'primeng/password';
import { PanelMenuModule } from 'primeng/panelmenu';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';


@NgModule({
    imports: [
        CommonModule,
        CameraRoutingModule,
        ButtonModule,
        MenuModule,
        CheckboxModule,
        InputTextModule,
        BarcodeScannerLivestreamModule,
        ZXingScannerModule,
        TableModule,
        FormsModule,
        ReactiveFormsModule,
        PanelMenuModule,
        PasswordModule,
        DialogModule
    ],
    declarations: [CameraComponent]
})
export class CameraModule { }
