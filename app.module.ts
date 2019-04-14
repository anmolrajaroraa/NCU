import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { LoginComponent } from './shop/login/login.component';
import { DashboardComponent } from './shop/dashboard/dashboard.component';
import { AdminComponent } from './shop/dashboard/admin/admin.component';
import { CustomerComponent } from './shop/dashboard/customer/customer.component';
import { FileuploadComponent } from './shop/dashboard/admin/fileupload/fileupload.component';
import {HttpClientModule} from '@angular/common/http';
import { CategoryComponent } from './shop/dashboard/customer/combine/category/category.component';
import { SubcategoryComponent } from './shop/dashboard/customer/combine/subcategory/subcategory.component';
import { ProductComponent } from './shop/dashboard/customer/combine/product/product.component';
import { OrderComponent } from './shop/dashboard/customer/combine/order/order.component';
import { RegisterComponent } from './shop/register/register.component';
import { PreviousorderComponent } from './shop/dashboard/customer/previousorder/previousorder.component';
import { CombineComponent } from './shop/dashboard/customer/combine/combine.component';
@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    LoginComponent,
    DashboardComponent,
    AdminComponent,
    CustomerComponent,
    FileuploadComponent,
    CategoryComponent,
    SubcategoryComponent,
    ProductComponent,
    OrderComponent,
    RegisterComponent,
    PreviousorderComponent,
    CombineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
