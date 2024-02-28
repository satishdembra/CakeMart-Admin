import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-listings-edit',
  templateUrl: './admin-listings-edit.component.html',
  styleUrls: ['./admin-listings-edit.component.css'],
})
export class AdminListingsEditComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('isAuthenticated') === 'false') {
      this.router.navigate(['/admin-signin']);
    }
  }
  logout() {
    localStorage.setItem('isAuthenticated', 'false');
    this.router.navigate(['/admin-signin']);
  }
}
