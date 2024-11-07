import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { TestComponent } from './test.component';


@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    NgFor
  ],
  bootstrap: [TestComponent]
})
export class TestModule { }
