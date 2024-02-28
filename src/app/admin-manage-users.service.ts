import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminManageUsersService {
  constructor(private http: HttpClient) {}

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    user_id:
      '$2b$10$ZvAB/lALN9kENdKnl3qUbeiKltSjqR.z0gwte5GvLMyus15bsq/Dq:::12:::$2b$10$GT.79kHKWAMXVxOEd9EjPeSJ6N1JsD785dQrNksaf6OxMPsSrVH3m',
  });
  options = { headers: this.headers };

  // calling getAllProducts api
  getAllUsers() {
    return this.http
      .post<any>(
        'http://localhost:1230/admin/getUserByLimit',
        null,
        this.options
      )
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  // calling removeProduct api
  removeUser(data: any) {
    return this.http
      .post<any>('http://localhost:1230/admin/removeUser', data, this.options)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}
