import { Component } from '@angular/core';
import { AdminManageUsersService } from '../admin-manage-users.service';
import { AdminManageUsers } from '../admin-manage-users';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-manage-users',
  templateUrl: './admin-manage-users.component.html',
  styleUrls: ['./admin-manage-users.component.css'],
})
export class AdminManageUsersComponent {
  selectedButton: string | null = '1';

  filterString1: string = '';
  constructor(
    private adminManageUsersService: AdminManageUsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  users: AdminManageUsers[] = [];

  isLoaded = false;

  ngOnInit() {
    if (localStorage.getItem('isAuthenticated') === 'false') {
      this.router.navigate(['/admin-signin']);
    }
    setInterval(() => {
      this.isLoaded = true;
    }, 800);
    this.adminManageUsersService.getAllUsers().subscribe((res) => {
      // this.menus = res;
      if (res.status == 'error') {
        alert('Something went wrong.');
      } else {
        this.users = res.data;
        console.log('-------------------------- ', res.data);
      }
    });
  }

  removeUser(customer_id: number) {
    const result = window.confirm('Are you sure you want to delete?');
    if (result) {
      console.log('customer_id ', customer_id);

      this.adminManageUsersService.removeUser({ customer_id }).subscribe();
      location.reload();
    }
  }
}
