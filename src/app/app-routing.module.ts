import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CameraComponent } from 'src/app/camera/camera.component';
// import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { LoginComponent } from 'src/app/login/login.component';
// import { StoreComponent } from 'src/app/store/store.component';
// import { StroreExampleComponent } from "./strore-example/strore-example.component";
// import { LinenotifyComponent } from 'src/app/linenotify/linenotify.component';
// import { ProducttypeComponent } from 'src/app/producttype/producttype.component';
// import { CompanyComponent } from 'src/app/company/company.component';
// import { UsersComponent } from 'src/app/users/users.component';
// import { MenubarComponent } from 'src/app/menubar/menubar.component';

import { AppComponent } from './app.component';
import { AppLayoutComponent } from "./layout/app.layout.component";

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: "",
    component: AppLayoutComponent,
    children: [
      { path: 'store', loadChildren: () => import('./store/store.module').then(m => m.StoreModule) },
      { path: 'camera', loadChildren: () => import('./camera/camera.module').then(m => m.CameraModule) },
      { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'linenotify', loadChildren: () => import('./linenotify/linenotify.module').then(m => m.LinenotifyModule) },
      { path: 'producttype', loadChildren: () => import('./producttype/producttype.module').then(m => m. ProducttypeModule) },
      { path: 'company', loadChildren: () => import('./company/company.module').then(m => m. CompanyModule) },
      { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
