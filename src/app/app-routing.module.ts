import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerspaceComponent } from './bannerspace/bannerspace.component';

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
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
