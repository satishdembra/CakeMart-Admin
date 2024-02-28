import { Component } from '@angular/core';
import { AdminManageOrders } from '../admin-manage-orders';
import { AdminManageOrdersService } from '../admin-manage-orders.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-manage-orders',
  templateUrl: './admin-manage-orders.component.html',
  styleUrls: ['./admin-manage-orders.component.css'],
})
export class AdminManageOrdersComponent {
  selectedButton: string | null = '1';

  constructor(
    private adminManageOrdersService: AdminManageOrdersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  filterString2: string = '';
  orders: AdminManageOrders[] = [];
  isLoaded = false;
  ngOnInit() {
    if (localStorage.getItem('isAuthenticated') === 'false') {
      this.router.navigate(['/admin-signin']);
    }
    setInterval(() => {
      this.isLoaded = true;
    }, 800);
    this.adminManageOrdersService.getAllOrders().subscribe((res) => {
      this.orders = res.data;
      console.log('-------------------------- ', res.data);
    });
  }
}
