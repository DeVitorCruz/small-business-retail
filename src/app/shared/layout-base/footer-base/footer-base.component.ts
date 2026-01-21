import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer-base',
  templateUrl: './footer-base.component.html',
  styleUrls: ['./footer-base.component.scss'],
  standalone: true,
})
export class FooterBaseComponent  implements OnInit {

  constructor() { }

  @Input() public aboutUs: string = 'Aboute Us';

  @Input() public help: string = 'Help';
  
  @Input() public policy: string = 'Policies';

  @Input() public contact: string = 'Contact';
  
  @Input() public copyright: string = '2025 Your Store. All Rights Reserved.';


  ngOnInit(): void {}

}
