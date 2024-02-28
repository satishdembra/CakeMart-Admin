import { Component } from '@angular/core';
import { AdminManageProductsService } from '../admin-manage-products.service';
import { AdminManageProducts } from '../admin-manage-products';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-manage-products',
  templateUrl: './admin-manage-products.component.html',
  styleUrls: ['./admin-manage-products.component.css'],
})
export class AdminManageProductsComponent {
  pagination_req = {
    lower_limit: 0,
    upper_limit: 10,
  };

  selectedButton: string | null = '1';

  handleButtonClick(event: any) {
    const buttonValue = event.target.value;
    this.selectedButton = buttonValue;

    if (buttonValue == 1) {
      this.pagination_req['lower_limit'] = 0;
      this.pagination_req['upper_limit'] = 10;
    } else {
      this.pagination_req['lower_limit'] = (buttonValue - 1) * 10;
      this.pagination_req['upper_limit'] = (buttonValue - 1) * 10 + 10;
    }
    console.log('Button value:', buttonValue);
    console.log('Button value*10: ', buttonValue * 10);
    console.log('Selected button:', this.selectedButton);

    this.productService.getAllProducts(this.pagination_req).subscribe((res) => {
      // this.menus = res;
      if (res.status == 'error') {
        alert('Something went wrong.');
      } else {
        this.products = res.data;
        console.log('-------------------------- ', res.data);
      }
    });
  }
  constructor(
    private productService: AdminManageProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  products: AdminManageProducts[] = [];
  isLoaded = false;
  ngOnInit() {
    console.log('isLoaded ------------------ ', this.isLoaded);
    if (localStorage.getItem('isAuthenticated') === 'false') {
      this.router.navigate(['/admin-signin']);
    }

    setInterval(() => {
      this.isLoaded = true;
    }, 800);
    this.productService.getAllProducts(this.pagination_req).subscribe((res) => {
      // this.menus = res;
      if (res.status == 'error') {
        alert('Something went wrong.');
      } else {
        this.products = res.data;
        console.log('-------------------------- ', res.data);
      }
    });
  }

  removeProduct(product_id: number) {
    const result = window.confirm(
      'Are you sure you want to delete this product?'
    );
    if (result) {
      console.log('product id ', product_id);

      this.productService.removeProduct({ product_id }).subscribe();
      location.reload();
    }
  }
}
