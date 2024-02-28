import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminLoginService {
  constructor(private http: HttpClient) {}

  // calling authUser api
  authUser(data: any) {
    return this.http.post<any>('http://localhost:1230/admin/login', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
