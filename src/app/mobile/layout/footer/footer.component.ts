import { Component } from '@angular/core';
import { 
  IonFooter, 
  IonTitle, 
  IonToolbar,
  IonInput,
  IonButton,
  IonImg
} from '@ionic/angular/standalone';
import { FooterBaseComponent } from '../../../shared/layout-base/footer-base/footer-base.component';

@Component({
  selector: 'app-footer',
  imports: [
    IonFooter,
    IonTitle,
    IonToolbar,
    IonInput,
    IonButton,
    IonImg
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  host: { ngSkipHydration: 'true' }
})
export class FooterComponent extends FooterBaseComponent {

  constructor() {
    super();
  }

}
