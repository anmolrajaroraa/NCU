import { PreviousorderComponent } from './shop/dashboard/customer/previousorder/previousorder.component';
import { CombineComponent } from './shop/dashboard/customer/combine/combine.component';

import { LoginComponent } from './shop/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './shop/register/register.component';
import { CustomerComponent } from './shop/dashboard/customer/customer.component';

const routes: Routes = [
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'combine',component:CombineComponent},
{path:'porder',component:PreviousorderComponent},
{path:'customer',component:CustomerComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
