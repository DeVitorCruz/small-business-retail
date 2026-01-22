import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { 
  IonContent, 
  IonRouterOutlet, 
  IonMenu, 
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    IonHeader,
    IonMenu,
    IonTitle,
    IonToolbar,
    HeaderComponent,
    IonContent,
    IonRouterOutlet,
    FooterComponent,
    IonButtons,
    IonMenuButton
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  host: { ngSkipHydration: 'true' }
})
export class LayoutComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}


}
