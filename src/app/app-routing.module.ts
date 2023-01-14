import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CameraComponent } from 'src/app/camera/camera.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { LoginComponent } from 'src/app/login/login.component';
import { StoreComponent } from 'src/app/store/store.component';
import { StroreExampleComponent } from "./strore-example/strore-example.component";
import { LinenotifyComponent } from 'src/app/linenotify/linenotify.component';
import { ProducttypeComponent } from 'src/app/producttype/producttype.component';
import { CompanyComponent } from 'src/app/company/company.component';
import { UsersComponent } from 'src/app/users/users.component';

import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'store', component: StoreComponent },
      { path: 'store-example', component: StroreExampleComponent },
      { path: 'camera', component: CameraComponent },
      { path: 'dashboard', component: DashboardComponent },
      
      { path: 'linenotify', component: LinenotifyComponent  },
      { path: 'producttype', component: ProducttypeComponent  },
      { path: 'company', component: CompanyComponent  },
      { path: 'users', component: UsersComponent  },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
