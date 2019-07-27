import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],

})
export class CartComponent {
  cartProducts;
  checkoutForm;
  
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
    this.cartProducts = this.cartService.getItems();
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
   }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
 alert('Your order has been submitted');
    this.cartProducts = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

}