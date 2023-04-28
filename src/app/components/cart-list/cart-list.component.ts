import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/interfaces/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit{
  
  carts!: Products[];


  constructor(private productsService: ProductsService){}

  ngOnInit(): void {
    this.productsService.getCart().subscribe(
      (value) => {
        this.carts = value; 
      }
    );
  }

  devolucao(product: any)
  { 
    this.carts = this.carts.filter((p) => {
        return p !== product;
    });
    this.productsService.deleteCart(product.id).subscribe();
  }
}
