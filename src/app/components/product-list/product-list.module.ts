import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductsService } from 'src/app/services/products.service';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductAlertsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    ProductListComponent,
    ProductDetailComponent,
    ProductAlertsComponent
  ],
  providers: [
    ProductsService
  ]
})
export class ProductListModule { }
