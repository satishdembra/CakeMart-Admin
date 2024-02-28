import { Pipe, PipeTransform } from '@angular/core';
import { AdminManageUsers } from './admin-manage-users';
import { AdminManageOrders } from './admin-manage-orders';
import { AdminManageProducts } from './admin-manage-products';

@Pipe({
  name: 'searchPipe',
})
export class SearchPipePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}

@Pipe({
  name: 'searchPipe1',
  pure: true,
})
export class SearchPipePipe1 implements PipeTransform {
  transform(users: AdminManageUsers[], filterString1: String) {
    if ((users && users.length == 0) || filterString1 == '') {
      return users;
    } else {
      var users = users.filter((use) => {
        return (
          use.customer_email
            .toLowerCase()
            .includes(filterString1.toLowerCase()) ||
          use.user_name.toLowerCase().includes(filterString1.toLowerCase()) ||
          use.customer_role.toLowerCase().includes(filterString1.toLowerCase())
        );
      });
      return users;
    }
  }
}

@Pipe({
  name: 'searchPipe2',
  pure: true,
})
export class SearchPipePipe2 implements PipeTransform {
  transform(orders: AdminManageOrders[], filterString2: String) {
    if ((orders && orders.length == 0) || filterString2 == '') {
      return orders;
    } else {
      var orders = orders.filter((ord) => {
        return (
          ord.product_title
            .toLowerCase()
            .includes(filterString2.toLowerCase()) ||
          ord.ordered_by.toLowerCase().includes(filterString2.toLowerCase()) ||
          ord.ordered_by_mail
            .toLowerCase()
            .includes(filterString2.toLowerCase()) ||
          ord.price_paid.toLowerCase().includes(filterString2.toLowerCase())
        );
      });
      return orders;
    }
  }
}

@Pipe({
  name: 'searchPipe3',
  pure: true,
})
export class SearchPipePipe3 implements PipeTransform {
  transform(product: AdminManageProducts[], filterString2: String) {
    if ((product && product.length == 0) || filterString2 == '') {
      return product;
    } else {
      var product = product.filter((prod) => {
        return (
          prod.product_title
            .toLowerCase()
            .includes(filterString2.toLowerCase()) ||
          prod.product_currency
            .toLowerCase()
            .includes(filterString2.toLowerCase()) ||
          prod.created_at.toLowerCase().includes(filterString2.toLowerCase())
        );
      });
      return product;
    }
  }
}
