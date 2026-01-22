import { Component } from '@angular/core';
import { InfoBarBaseComponent } from '../../../../shared/layout-base/header-base/info-bar-base/info-bar-base.component';
import { IonToolbar, IonTitle, IonGrid, IonRow, IonCol, IonIcon } from '@ionic/angular/standalone';



@Component({
  selector: 'app-info-bar',
  standalone: true,
  imports:[
    IonToolbar,
    IonTitle,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon
  ],
  templateUrl: './info-bar.component.html',
  styleUrls: ['./info-bar.component.scss'],
  host: { ngSkipHydration: 'true' }
})
export class InfoBarComponent  extends InfoBarBaseComponent {

  constructor() {
    super();
  }
  
}
