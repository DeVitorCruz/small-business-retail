import { Component } from '@angular/core';
import { NavBarBaseComponent } from '../../../../shared/layout-base/header-base/nav-bar-base/nav-bar-base.component';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent extends NavBarBaseComponent {

  constructor() {
    super();
  }

}
