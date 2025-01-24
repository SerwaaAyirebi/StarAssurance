import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimComponent } from './claim/claim.component';

const routes: Routes = [
  {path:'',component:ClaimComponent},
  {path:'claim',component:ClaimComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MakeClaimRoutingModule { }
