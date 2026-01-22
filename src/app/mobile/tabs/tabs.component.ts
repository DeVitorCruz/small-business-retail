import { Component, OnInit } from '@angular/core';
import { 
  IonRouterOutlet, 
  IonContent,
  IonTabs,
  IonTab,
  IonTabBar,
  IonTabButton, 
  IonIcon,
  IonLabel,
  IonHeader,
  IonToolbar,
  IonTitle 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports:[
    IonHeader,
    IonToolbar,
    IonTitle,
    IonRouterOutlet,
    IonContent,
    IonTabs,
    IonTab,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel
  ],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  host: { ngSkipHydration: 'true' }
})
export class TabsComponent  implements OnInit {

  constructor() {
    addIcons({ triangle, ellipse, square });
  }

  ngOnInit() {}

}
