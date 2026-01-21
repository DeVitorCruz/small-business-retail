import { Component, OnInit } from '@angular/core';
import { InfoBarBaseComponent } from '../../../../shared/layout-base/header-base/info-bar-base/info-bar-base.component';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-info-bar',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './info-bar.component.html',
  styleUrls: ['./info-bar.component.scss'],
})
export class InfoBarComponent extends InfoBarBaseComponent {

  constructor() {
    super();
  }

}
