import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-test',
  // standalone: true,
  // imports: [
  //   CommonModule,
  //   NgFor
  // ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  numberList: number[] = [1, 2, 3];

}
