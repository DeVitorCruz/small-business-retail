import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-base',
  templateUrl: './banner-base.component.html',
  styleUrls: ['./banner-base.component.scss'],
  standalone: true,
})
export class BannerBaseComponent  implements OnInit {

  public bannerImages: string[] = [
    '/assets/banner/banner1.jpg',    
    '/assets/banner/banner2.jpg',    
    '/assets/banner/banner3.jpg',    
  ];

  public currentImageIndex: number = 0;

  constructor() { }

  ngOnInit(): void {}

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1)% this.bannerImages.length;
  }

  previousImage(): void {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.bannerImages.length)% this.bannerImages.length;
  }

}
