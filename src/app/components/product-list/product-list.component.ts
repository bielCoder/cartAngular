
import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/interfaces/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  products!: Products[];


  constructor(private productsService: ProductsService){}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(
      (products) => {
        this.products = products;
      }
    );
  }

  share(name: string)
  {
    alert(`The product ${name} has been shared`);
  }

}
