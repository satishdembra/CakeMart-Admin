import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminCreateProductService } from '../admin-create-product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-create-product',
  templateUrl: './admin-create-product.component.html',
  styleUrls: ['./admin-create-product.component.css'],
})
export class AdminCreateProductComponent {
  constructor(
    private adminCreateProductService: AdminCreateProductService,
    private router: Router
  ) {}
  ngOnInit() {
    if (localStorage.getItem('isAuthenticated') === 'false') {
      this.router.navigate(['/admin-signin']);
    }
  }

  productForm = {
    product_id: 0,
    product_title: '',
    product_old_price: 0,
    product_new_lesser_price: 0,
    product_image: '',
    product_desc: '',
    product_currency: '₹',
  };

  createNewMenu() {
    this.adminCreateProductService.addProduct(this.productForm).subscribe({
      next: (data) => {
        console.log('data is --------- ' + data);

        if (data) {
          this.router.navigate(['/admin-manage-products']);
        } else alert('Invalid Credentials');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
