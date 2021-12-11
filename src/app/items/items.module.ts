import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items.component';


@NgModule({
  declarations: [
    ItemsComponent
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ]
})
export class ItemsModule { }
