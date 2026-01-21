import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-base',
  templateUrl: './header-base.component.html',
  styleUrls: ['./header-base.component.scss'],
  standalone: true,
})
export class HeaderBaseComponent implements OnInit {

  public welcomeMessage: string = 'Welcome to Our Store Multikart';

  public contactNumber: string = '123-456-7890';

  public myAccount: string = 'My Account';

  constructor() { }

  ngOnInit(): void {
    
  }

}
