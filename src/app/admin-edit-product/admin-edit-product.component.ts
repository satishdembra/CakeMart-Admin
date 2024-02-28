import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminEditProductService } from '../admin-edit-product.service';

@Component({
  selector: 'app-admin-edit-product',
  templateUrl: './admin-edit-product.component.html',
  styleUrls: ['./admin-edit-product.component.css'],
})
export class AdminEditProductComponent {
  productForm = {
    product_id: 0,
    product_title: '',
    product_old_price: 0,
    product_new_lesser_price: 0,
    product_image: '',
    product_desc: '',
    product_currency: '₹',
  };
  constructor(
    private adminEditProductService: AdminEditProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('isAuthenticated') === 'false') {
      this.router.navigate(['/admin-signin']);
    }
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.findByMenuId(id);
    });
  }

  findByMenuId(id: number) {
    this.adminEditProductService.findByMenuId(id).subscribe((data) => {
      console.log(data.status);
      this.productForm = data.data[0];
    });
  }

  updateProduct() {
    this.adminEditProductService.updatemenu(this.productForm).subscribe({
      next: (data) => {
        this.router.navigate(['/admin-manage-products']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
