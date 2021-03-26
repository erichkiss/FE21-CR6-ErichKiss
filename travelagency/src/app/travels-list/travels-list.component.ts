import { Component, OnInit } from '@angular/core';
import { travels } from '../travels'
import { CartService } from '../cart.service'

@Component({
  selector: 'app-travels-list',
  templateUrl: './travels-list.component.html',
  styleUrls: ['./travels-list.component.css']
})
export class TravelsListComponent implements OnInit {
  listTravels = travels;
  travel: any;
  constructor(private cartService: CartService) { }

  addToCart(travel) {
    window.alert('Your travel has been added to the cart');
    this.cartService.addToCart(travel);
  } // same as PreWork e-commerce page
  
  ngOnInit(): void {
  }

}
