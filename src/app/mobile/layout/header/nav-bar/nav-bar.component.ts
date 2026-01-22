import { Component } from '@angular/core';
import { NavBarBaseComponent } from '../../../../shared/layout-base/header-base/nav-bar-base/nav-bar-base.component';
import { 
  IonToolbar,  
  IonTitle, 
  IonButtons,  
  IonMenuButton,
  IonHeader,
  IonMenu,
  IonContent,
  MenuController,
  IonImg 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    IonToolbar,
    IonTitle,
    IonButtons,
    IonMenuButton,
    IonHeader,
    IonMenu,
    IonContent,
    IonImg
  ],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  host: { ngSkipHydration: 'true' }
})
export class NavBarComponent extends NavBarBaseComponent {

  constructor(private menuCtr: MenuController) {
    super();
  }

  openMenu(menuId: string): void {
    this.menuCtr.open(menuId);
  }

}
