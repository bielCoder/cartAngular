
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Client } from 'src/app/interfaces/client';
import { Shipping } from 'src/app/interfaces/shipping';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippings!: Shipping[];

  checkoutForm = this.formBuilder.group({
    name:  '',
    address: ''
  });
  
  constructor(private shippingService: ProductsService, private formBuilder: FormBuilder)
  {

  }

  ngOnInit(): void 
  {
    this.shippingService.getShipping().subscribe(
      (value) => {
        this.shippings = value;
      }
    );
  }

  onSubmit()
  {
    this.shippingService.postAddress(this.checkoutForm.value).subscribe();
  }
}
