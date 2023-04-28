import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/interfaces/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id!: Products;
  product!: Products;
  
  constructor(private router: ActivatedRoute, private productsService: ProductsService)
  {
    this.idProduct();
  }
  
  ngOnInit(): void {
    this.productsService.getProduct(this.id).subscribe(
      (product) => {
        this.product = product;
      }
    );
  }
  
  idProduct()
  {
    this.id = this.router.snapshot.params['id'];
  }
  
  onNotify()
  {
    alert('You will be notifed when the product goes on sale');
  }
  
  addToCart(product: any)
  {
    this.productsService.postCart(product).subscribe();
  }
}
