import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-bar-base',
  standalone: true,
  templateUrl: './info-bar-base.component.html',
  styleUrls: ['./info-bar-base.component.scss'],
})
export class InfoBarBaseComponent  implements OnInit {

  @Input() public welcomeMessage: string = '';

  @Input() public contactNumber: string = '';

  @Input() public myAccount: string = '';

  constructor() { }

  ngOnInit(): void {}

}
