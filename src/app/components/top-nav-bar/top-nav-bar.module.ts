import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { TopNavBarComponent } from './top-nav-bar.component';


@NgModule({
  declarations: [
    TopNavBarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports:[TopNavBarComponent]
})
export class TopNavBarModule { }
