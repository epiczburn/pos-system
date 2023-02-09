import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProducttypeComponent } from './producttype.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ProducttypeComponent }
    ])],
    exports: [RouterModule]
})
export class ProducttypeRoutingModule { }
