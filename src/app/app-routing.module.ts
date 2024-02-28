import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminManageProductsComponent } from './admin-manage-products/admin-manage-products.component';
import { AdminCreateProductComponent } from './admin-create-product/admin-create-product.component';
import { AdminEditProductComponent } from './admin-edit-product/admin-edit-product.component';
import { AdminManageUsersComponent } from './admin-manage-users/admin-manage-users.component';
import { AdminManageOrdersComponent } from './admin-manage-orders/admin-manage-orders.component';
import { AdminDashboardHomeComponent } from './admin-dashboard-home/admin-dashboard-home.component';
import { AdminListingsComponent } from './admin-listings/admin-listings.component';
import { AdminListingsEditComponent } from './admin-listings-edit/admin-listings-edit.component';

const routes: Routes = [
  { path: '', component: AdminLoginComponent },
  { path: 'admin-signin', component: AdminLoginComponent },
  {
    path: 'admin-dashboard',
    component: AdminDashboardHomeComponent,
  },
  {
    path: 'admin-test/:id',
    component: AdminEditProductComponent,
  },
  {
    path: 'admin-listings',
    component: AdminListingsComponent,
  },

  {
    path: 'admin-manage-products',
    component: AdminManageProductsComponent,
  },
  {
    path: 'admin-create-products',
    component: AdminCreateProductComponent,
  },
  {
    path: 'admin-edit-product/:id',
    component: AdminListingsEditComponent,
  },
  {
    path: 'admin-manage-users',
    component: AdminManageUsersComponent,
  },
  {
    path: 'admin-manage-orders',
    component: AdminManageOrdersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
