import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetQuote1Component } from './get-quote1/get-quote1.component';
import { Getquotedetails1Component } from './getquotedetails1/getquotedetails1.component';

const routes: Routes = [
  {path: '', redirectTo:'get-quote1', pathMatch:'full'},
  {
    path: 'get-quote1', component:GetQuote1Component
  },
  {
    path:'getquotedetails1', component:Getquotedetails1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Getquote1RoutingModule { }
