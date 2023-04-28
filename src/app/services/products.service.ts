
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../interfaces/products';
import { Shipping } from '../interfaces/shipping';
import { Observable } from 'rxjs';
import { Client } from '../interfaces/client';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products = 'http://localhost:3000/Products';
  private cart = 'http://localhost:3000/Cart';
  private shipping = 'http://localhost:3000/Shipping';
  private client = 'http://localhost:3000/Client';

  constructor(private http: HttpClient)
  {

  }

  getProducts():Observable<Products[]>
  {
    return this.http.get<Products[]>(this.products);
  }
  
  getProduct(id: Products):Observable<Products>
  {
    return this.http.get<Products>(`${this.products}/${id}`);
  }

  // Adicionando produto no carrinho

  postCart(product:number):Observable<Products>
  {
    return this.http.post<Products>(this.cart,product);
  }

  getCart():Observable<Products[]>
  {
    return this.http.get<Products[]>(this.cart);
  }

  deleteCart(id:Number)
  {
    return this.http.delete(`${this.cart}/${id}`);
  }

  // Resgatando dados do shipping

  getShipping():Observable<Shipping[]>
  {
    return this.http.get<Shipping[]>(this.shipping);
  }

  postAddress(address:any):Observable<Client>
  {
    return this.http.post<Client>(this.client,address);
  }

}
