import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CameraComponent } from './camera.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: CameraComponent }
    ])],
    exports: [RouterModule]
})
export class CameraRoutingModule { }
