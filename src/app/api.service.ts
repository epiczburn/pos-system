import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from "../environments/environment";
import { catchError, Observable, of, retry, tap, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
  userProfile = localStorage.getItem('user-profile') ? JSON.parse(localStorage.getItem('user-profile')) : null

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'token': this.userProfile?.token ? this.userProfile.token : ''
    }),
  }


  public login(data) {
    console.log('apilogin')
    return this.http.post(
      `/api/v1/login`,
      JSON.stringify(data),
      this.httpOptions
    )
  }

  public productList() {
    return this.http.get(
      `/api/v1/products`,
      this.httpOptions
    )
  }
  public insertNewProduct(data: any) {
    return this.http.post(
      `/api/v1/products`,
      JSON.stringify(data),
      this.httpOptions
    )
  }
  public deleteProduct(id: string) {
    return this.http.delete(
      `/api/v1/products`, { body: { id }, headers: this.httpOptions.headers }
    )
  }

  public productUpdate(data) {
    return this.http.put(
      `/api/v1/products`,
      JSON.stringify(data),
      this.httpOptions
    )
  }

  public productType() {
    return this.http.get(
      `/api/v1/product-types`,
      this.httpOptions
    )
  }

  public insertProductType(data){
    return this.http.post(
      `/api/v1/product-types`,
      data,
      this.httpOptions
    )
  }

  public updateProductType(data){
    return this.http.put(
      `/api/v1/product-types`,
      data,
      this.httpOptions
    )
  }

  public Companys() {
    return this.http.get(
      `/api/v1/companys`,
      this.httpOptions
    )
  }

  public insertCompany(data){
    return this.http.post(
      `/api/v1/companys`,
      data,
      this.httpOptions
    )
  }

  public updateCompany(data){
    return this.http.put(
      `/api/v1/companys`,
      data,
      this.httpOptions
    )
  }

  public Users() {
    return this.http.get(
      `/api/v1/users`,
      this.httpOptions
    )
  }
  public insertUser(data){
    return this.http.post(
      `/api/v1/users`,
      data,
      this.httpOptions
    )
  }

  public updateUser(data){
    return this.http.put(
      `/api/v1/users`,
      data,
      this.httpOptions
    )
  }
  public addlinetoken(data){
    return this.http.post(
      `/api/v1/line/add-api`,
      data,
      this.httpOptions
    )
  }

  public confirmSale(data){
    return this.http.post(
      `/api/v1/sales/confirm`,
      data,
      this.httpOptions
    )
  }

  public Reports(data){
    
    return this.http.post(
      `/api/v1/report/all-data`,
      data,
      this.httpOptions
    )
  }
  

}
