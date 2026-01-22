import { Component } from '@angular/core';
import { BannerBaseComponent } from '../../../../shared/layout-base/header-base/banner-base/banner-base.component';
import { IonCard } from '@ionic/angular/standalone';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [
    IonCard
  ],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  host: { ngSkipHydration: 'true' }
})
export class BannerComponent  extends BannerBaseComponent {

  constructor() {
    super();
  }

}
