import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './model/Product';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  
  constructor(private http:HttpClient) { }
  getProduct(){
    return this.http.get<Product[]>("http://localhost:8095/product/api.2.0/retrieve/all")
  }
  saveProduct(product:Product):
Observable<Object>{
return this.http.post('http://localhost:8095/product/api.2.0/create',
product);
}
getProductById(id: number): Observable<Product> {
  return this.http.get<Product>(`http://localhost:8095/product/api.2.0/retrieve/${id}`);
}

updateProduct(product: Product): Observable<Object> {
  return this.http.put(`http://localhost:8095/product/api.2.0/update/${product.productId}`, product);
}
deleteProductById(id:number){
  return this.http.delete(`http://localhost:8095/product/api.2.0/delete/${id}`)
}


}

