import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterdetailsComponent } from './registerdetails/registerdetails.component';


@NgModule({
  declarations: [
    RegisterdetailsComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    MatFormFieldModule
  ]
})
export class RegisterModule { }
