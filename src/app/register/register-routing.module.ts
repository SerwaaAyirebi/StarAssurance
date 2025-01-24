import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterdetailsComponent } from './registerdetails/registerdetails.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'registerdetails', pathMatch:'full'
  },
  {
    path: 'registerdetails', component : RegisterdetailsComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
