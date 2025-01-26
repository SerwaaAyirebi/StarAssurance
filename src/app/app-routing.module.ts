import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerspaceComponent } from './bannerspace/bannerspace.component';

// <<<<<<< HEAD
const routes: Routes = [
  {path: '', redirectTo: 'bannerspace', pathMatch:'full'},
{
  path: 'bannerspace', component: BannerspaceComponent
},
  {
    path: 'getquote1', 
    loadChildren:()=>import('./getquote1/getquote1.module').then(m=>m.Getquote1Module)
  },
  {
    path: 'register',
    loadChildren:()=>import('./register/register.module').then(m=>m.RegisterModule)
  },
  
 {
  path:'policy',
  loadChildren: () => import('./policy/policy.module').then(m => m.PolicyModule)

 },
{
  path:'make-claim',
  loadChildren: () => import('./make-claim/make-claim.module').then(m => m.MakeClaimModule)
}

// >>>>>>> insurance
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
