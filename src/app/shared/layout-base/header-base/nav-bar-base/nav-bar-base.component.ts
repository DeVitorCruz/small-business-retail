import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-base',
  templateUrl: './nav-bar-base.component.html',
  styleUrls: ['./nav-bar-base.component.scss'],
  standalone: true,
})
export class NavBarBaseComponent  implements OnInit {

  public storeLogo: string = '/assets/logo/multikart.png';

  public cartItemCount: number = 0;

  constructor() { }

  ngOnInit(): void {}

  navigateToCart(): void {
    console.log('Navigation to Cart');
  }

  searchProducts(): void {
    console.log('Searching...');
  }

  changeLanguageCurrency(): void {
    console.log('Changing Language/Currency...');
  }

}
