import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CameraComponent } from 'src/app/camera/camera.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { LoginComponent } from 'src/app/login/login.component';
import { StoreComponent } from 'src/app/store/store.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'store', component: StoreComponent },
      { path: 'camera', component: CameraComponent  },
      { path: 'dashboard', component: DashboardComponent  },
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
