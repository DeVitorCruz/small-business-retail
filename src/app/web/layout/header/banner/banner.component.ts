import { Component } from '@angular/core';
import { BannerBaseComponent } from '../../../../shared/layout-base/header-base/banner-base/banner-base.component';

@Component({
  selector: 'app-banner',
  standalone: true,
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent extends BannerBaseComponent  {

  constructor() {
    super();
  }


}
