import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';

import { Getquote1RoutingModule } from './getquote1-routing.module';
import { GetQuote1Component } from './get-quote1/get-quote1.component';
import { Getquotedetails1Component } from './getquotedetails1/getquotedetails1.component';
import { MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

 

@NgModule({
  declarations: [
    GetQuote1Component,
    Getquotedetails1Component
  ],
  imports: [
    CommonModule,
    Getquote1RoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    // BrowserAnimationsModule
  
  ]
})
export class Getquote1Module { }
