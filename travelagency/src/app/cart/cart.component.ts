import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart;
  cartTotal: number = 0;
  cartDiscount: number = 0;
  cartDiscountValue: number = 0; 
  // some variables to do the math and print discount amount
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getItems();
    this.cartTotal = 0;
    this.cartDiscount = 0;
    this.cartDiscountValue = 0;


    for (let i of this.cart) {
      this.cartTotal += i.price;     //calculating the total price
      }
    
    if (this.cartTotal > 200 && this.cartTotal <= 500) { // applying the discount
      this.cartDiscount = (this.cartTotal / 100) * 10;
      this.cartTotal = (this.cartTotal / 100) * 90;
      this.cartDiscountValue = 10;
    } 
    if (this.cartTotal > 500) { // applying the discount
      this.cartDiscount = (this.cartTotal / 100) * 20;
      this.cartTotal = (this.cartTotal / 100) * 80;
      this.cartDiscountValue = 20;
      }
    
  }

  clear() {
    this.cart = this.cartService.clearCart();
  }

}
