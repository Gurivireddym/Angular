import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObjectRoutingModule } from './object-routing.module';
import { ObjectComponent } from './object.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ObjectComponent ],
  imports: [
    CommonModule,
    ObjectRoutingModule,
    ReactiveFormsModule
  ]
})
export class ObjectModule { }
