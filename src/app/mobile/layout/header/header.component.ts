import { Component } from '@angular/core';
import { IonHeader } from '@ionic/angular/standalone';
import { HeaderBaseComponent } from '../../../shared/layout-base/header-base/header-base.component';
import { InfoBarComponent } from './info-bar/info-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BannerComponent } from './banner/banner.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    IonHeader,
    InfoBarComponent,
    NavBarComponent,
    BannerComponent
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: { ngSkipHydration: 'true' }
})
export class HeaderComponent extends HeaderBaseComponent {

  constructor() {
    super();
  }

}
