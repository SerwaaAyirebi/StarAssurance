import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:'policy',loadChildren: () => import('./policy/policy.module').then(m => m.PolicyModule)},


{path:'make-claim',loadChildren: () => import('./make-claim/make-claim.module').then(m => m.MakeClaimModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
