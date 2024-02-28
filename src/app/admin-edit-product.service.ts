import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminEditProduct } from './admin-edit-product';

@Injectable({
  providedIn: 'root',
})
export class AdminEditProductService {
  constructor(private http: HttpClient) {}

  // api call to product by Id
  findByMenuId(id: number): Observable<any> {
    console.log('----------------------------  ' + id);
    return this.http.get<any>(
      `http://localhost:1230/product/readAProduct/${id}`
    );
  }
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    user_id:
      '$2b$10$ZvAB/lALN9kENdKnl3qUbeiKltSjqR.z0gwte5GvLMyus15bsq/Dq:::12:::$2b$10$GT.79kHKWAMXVxOEd9EjPeSJ6N1JsD785dQrNksaf6OxMPsSrVH3m',
  });
  options = { headers: this.headers };
  updatemenu(payload: any) {
    return this.http.put(
      `http://localhost:1230/admin/editProduct`,
      payload,
      this.options
    );
  }
}
