import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleItemComponent } from './single-item.component';

const routes: Routes = [{ path: '', component: SingleItemComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleItemRoutingModule { }
