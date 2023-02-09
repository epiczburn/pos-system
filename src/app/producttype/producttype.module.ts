import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProducttypeRoutingModule } from './producttype-routing.module';
import { ReactiveFormsModule } from '@angular/forms'
import { ProducttypeComponent } from './producttype.component';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { PasswordModule } from 'primeng/password';
import { PanelMenuModule } from 'primeng/panelmenu';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { ImageModule} from 'primeng/image';

@NgModule({
    imports: [
        CommonModule,
        ImageModule,
        ProducttypeRoutingModule,
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
    declarations: [ProducttypeComponent]
})
export class ProducttypeModule { }
