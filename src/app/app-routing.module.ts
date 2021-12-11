import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },{ path: 'items', loadChildren: () => import('./items/items.module').then(m => m.ItemsModule) }, { path: 'additem', loadChildren: () => import('./add-item/add-item.module').then(m => m.AddItemModule) }, { path: 'singleitem/:itemId', loadChildren: () => import('./single-item/single-item.module').then(m => m.SingleItemModule) }, { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
