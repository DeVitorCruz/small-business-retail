import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material/material.module';
import { DashboardComponent } from './dashboard.component';
import { TopNavBarModule } from '../components/top-nav-bar/top-nav-bar.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MaterialModule,
    TopNavBarModule,
    NgFor
  ],
  providers:[],
  bootstrap:[DashboardComponent]
})
export class DashboardModule { }
