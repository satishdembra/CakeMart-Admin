import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminManageProductsService } from '../admin-manage-products.service';
import { AdminManageProducts } from '../admin-manage-products';

@Component({
  selector: 'app-admin-listings',
  templateUrl: './admin-listings.component.html',
  styleUrls: ['./admin-listings.component.css'],
})
export class AdminListingsComponent {
  constructor(
    private productService: AdminManageProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  logout() {
    localStorage.setItem('isAuthenticated', 'false');
    this.router.navigate(['/admin-signin']);
  }
  pagination_req = {
    lower_limit: 0,
    upper_limit: 10,
  };

  selectedButton: number | null = 1;
  filterString3: string = '';

  public buttonValue = 1;

  handleButtonClick(event: any) {
    this.buttonValue = event.target.value;
    this.selectedButton = this.buttonValue;

    if (this.buttonValue == 1) {
      this.pagination_req['lower_limit'] = 0;
      this.pagination_req['upper_limit'] = 10;
    } else {
      this.pagination_req['lower_limit'] = 0;
      this.pagination_req['upper_limit'] = this.buttonValue * 10;
    }
    console.log('Button value:', this.buttonValue);
    console.log('Button value*10: ', this.buttonValue * 10);
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

  products: AdminManageProducts[] = [];
  isLoaded = false;
  totalProduct = 0;
  paginatedCtr = 0;
  pagArr = new Array<number>();
  ngOnInit() {
    console.log('isLoaded ------------------ ', this.isLoaded);
    if (localStorage.getItem('isAuthenticated') === 'false') {
      this.router.navigate(['/admin-signin']);
    }

    this.productService.getProductsCtr(null).subscribe((res) => {
      if (res.status == 'error') {
        alert('Something went wrong.');
      } else {
        this.totalProduct = res.count;
        this.paginatedCtr = Math.ceil(this.totalProduct / 10);
        console.log('------asfsadf------------------- ', res.count);
        console.log(
          '------this.paginatedCtr------------------- ',
          this.paginatedCtr
        );
        for (let i = 0; i < this.paginatedCtr; i++) {
          this.pagArr[i] = i + 1;
          console.log('# i is  ', this.pagArr[i]);
        }
      }
    });

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
