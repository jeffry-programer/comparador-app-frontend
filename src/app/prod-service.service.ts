import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdService {

  constructor(private http: HttpClient) { }

  base  = environment.base;

  searchProducts($request: any){
    return this.http.post(`${this.base}search-products`,$request);
  }

  searchProdSugerations($request: any){
    return this.http.post(`${this.base}prod-sugerations`,$request);
  }

  prodMoreSearches(){
    return this.http.get(`${this.base}prod-more-search`);
  }

  queryDetailProd($request: any){
    return this.http.post(`${this.base}query-detail-prod`,$request);
  }

  queryOtherPrice($request: any){
    return this.http.post(`${this.base}query-other-price`,$request);
  }

  queryProdSubCategory($request: any){
    return this.http.post(`${this.base}query-prods-subcategory`,$request);
  }
}
