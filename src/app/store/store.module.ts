import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreRoutingModule } from './store-routing.module';
import { ReactiveFormsModule } from '@angular/forms'
import { StoreComponent } from './store.component';
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
        StoreRoutingModule,
        ButtonModule,
        MenuModule,
        CheckboxModule,
        InputTextModule,
        TableModule,
        FormsModule,
        ReactiveFormsModule,
        PanelMenuModule,
        PasswordModule,
        DialogModule
    ],
    declarations: [StoreComponent]
})
export class StoreModule { }
