import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  login(user: any){
    return this.http.post('http://localhost:3398/api/v1/login',user);
  }
}
