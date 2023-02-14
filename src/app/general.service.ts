import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http: HttpClient){}

  base  = environment.base;

  public allCategories(){
    return this.http.get(`${this.base}allCategories`);
  }

  public querySubCategories(nameCategory: any){
    return this.http.post(`${this.base}query-sub-categories`, nameCategory);
  }

  public queryList(){
    return this.http.get(`${this.base}query-list`);
  }

  public queryDetailList(data: any){
    return this.http.post(`${this.base}query-detail-list`, data);
  }

  public addProdList(data: any){
    return this.http.post(`${this.base}add-prod-list`, data);
  }

  public changeStatusProd(data: any){
    return this.http.post(`${this.base}change-status-prod`, data);
  }

  public deleteProdList(data: any){
    return this.http.post(`${this.base}delete-prod-list`, data);
  }

  public editProdList(data: any){
    return this.http.post(`${this.base}edit-prod-list`, data);
  }

  public deleteList(data: any){
    return this.http.post(`${this.base}delete-list`, data);
  }
  
  public addList(data: any){
    return this.http.post(`${this.base}add-list`, data);
  }

  public shareList(data: any){
    return this.http.post(`${this.base}share-list`, data);
  }

  public queryDataToCompare(data: any){
    return this.http.post(`${this.base}compare-list`, data);
  }
}
