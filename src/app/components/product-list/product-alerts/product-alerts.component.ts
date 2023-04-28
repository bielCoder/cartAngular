import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Products } from 'src/app/interfaces/products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {

 @Input() product!:Products;
 @Output() notify: EventEmitter<Products> = new EventEmitter;

   constructor()
   {
     
   }

   notifyMe()
   {
    this.notify.emit();
   }
}
