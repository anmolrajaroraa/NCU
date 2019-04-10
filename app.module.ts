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
import { CategoryComponent } from './shop/dashboard/customer/category/category.component';
import { SubcategoryComponent } from './shop/dashboard/customer/subcategory/subcategory.component';
import { ProductComponent } from './shop/dashboard/customer/product/product.component';
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
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
