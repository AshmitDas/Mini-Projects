import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor( private http:HttpClient) { }

  public getProductDeatils(url){
    return this.http.get(url)
  }
}
