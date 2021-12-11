import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { SingleItemRoutingModule } from './single-item-routing.module';
import { SingleItemComponent } from './single-item.component';


@NgModule({
  declarations: [
    SingleItemComponent
  ],
  imports: [
    CommonModule,
    SingleItemRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class SingleItemModule { }
