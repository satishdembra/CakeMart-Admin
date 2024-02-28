import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminManageProductsComponent } from './admin-manage-products/admin-manage-products.component';
import { AdminCreateProductComponent } from './admin-create-product/admin-create-product.component';
import { AdminEditProductComponent } from './admin-edit-product/admin-edit-product.component';
import { AdminManageUsersComponent } from './admin-manage-users/admin-manage-users.component';
import { AdminManageOrdersComponent } from './admin-manage-orders/admin-manage-orders.component';
import {
  SearchPipePipe,
  SearchPipePipe1,
  SearchPipePipe2,
  SearchPipePipe3,
} from './search-pipe.pipe';
import { AdminDashboardHomeComponent } from './admin-dashboard-home/admin-dashboard-home.component';
import { AdminListingsComponent } from './admin-listings/admin-listings.component';
import { AdminListingsEditComponent } from './admin-listings-edit/admin-listings-edit.component';
import { Chart } from 'chart.js';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    AdminManageProductsComponent,
    AdminCreateProductComponent,
    AdminEditProductComponent,
    AdminManageUsersComponent,
    AdminManageOrdersComponent,
    SearchPipePipe,
    SearchPipePipe1,
    SearchPipePipe2,
    SearchPipePipe3,
    AdminDashboardHomeComponent,
    AdminListingsComponent,
    AdminListingsEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
