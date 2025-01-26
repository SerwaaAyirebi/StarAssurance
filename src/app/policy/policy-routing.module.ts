import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolicydetailsComponent } from './policydetails/policydetails.component';
import { BannerspaceComponent } from '../bannerspace/bannerspace.component';
import { VehicledetailsComponent } from './vehicledetails/vehicledetails.component';
import { SummaryComponent } from './summary/summary.component';
import { ClaimComponent } from '../make-claim/claim/claim.component';

const routes: Routes = [
  {path:'',component:BannerspaceComponent},
  {path:'policydetails',component:PolicydetailsComponent},
  {path:'vehicledetails',component:VehicledetailsComponent},
  {path:'summary',component:SummaryComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PolicyRoutingModule { }
