import { Component } from '@angular/core';
import { InfoBarComponent } from './info-bar/info-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BannerComponent } from './banner/banner.component';
import { HeaderBaseComponent } from '../../../shared/layout-base/header-base/header-base.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    InfoBarComponent,
    NavBarComponent,
    BannerComponent
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends HeaderBaseComponent {

  constructor() { 
    super();        
  }


}
