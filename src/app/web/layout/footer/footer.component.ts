import { Component, OnInit } from '@angular/core';
import { FooterBaseComponent } from '../../../shared/layout-base/footer-base/footer-base.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent extends FooterBaseComponent {

  constructor() {
    super();
  }


}
