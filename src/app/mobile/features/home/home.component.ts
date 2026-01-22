import { Component } from '@angular/core';
import { HomeBaseComponent } from '../../../shared/features-base/home-base/home-base.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: { ngSkipHydration: 'true' }
})
export class HomeComponent  extends HomeBaseComponent {

  constructor() {
    super();
  }

}
