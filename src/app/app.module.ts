import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CameraComponent } from './camera/camera.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProductService } from './store/services/productservice';
import { StoreComponent } from './store/store.component';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { CustomerService } from './customerservice';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ToastModule } from 'primeng/toast';
import { ChartModule } from 'primeng/chart';
import { AppConfigService } from './dashboard/services/appConfigService';
import { ButtonComponent } from './button/button.component';
import { BarcodeScannerLivestreamModule } from "ngx-barcode-scanner";
import { InputNumberModule } from 'primeng/inputnumber';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { CardModule } from 'primeng/card';
import { StroreExampleComponent } from './strore-example/strore-example.component';


import { UsersComponent } from './users/users.component';
import { ProducttypeComponent } from './producttype/producttype.component';
import { CompanyComponent } from './company/company.component';
import { LinenotifyComponent } from './linenotify/linenotify.component';
import {ImageModule} from 'primeng/image';



@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    CameraComponent,
    LoginComponent,
    DashboardComponent,
    ButtonComponent,
    StroreExampleComponent,
    UsersComponent,
    ProducttypeComponent,
    CompanyComponent,
    LinenotifyComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InputTextModule,
    BrowserAnimationsModule,
    DataViewModule,
    PanelModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    HttpClientModule,
    RatingModule,
    TableModule,
    ProgressBarModule,
    BrowserAnimationsModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    ChartModule,
    ReactiveFormsModule,
    InputNumberModule,
    BarcodeScannerLivestreamModule,
    ZXingScannerModule,
    CardModule,
    ImageModule
  ],
  providers: [CustomerService, AppConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
