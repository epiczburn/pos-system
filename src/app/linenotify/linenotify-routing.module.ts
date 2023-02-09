import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LinenotifyComponent } from './linenotify.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: LinenotifyComponent }
    ])],
    exports: [RouterModule]
})
export class LinenotifyRoutingModule { }
