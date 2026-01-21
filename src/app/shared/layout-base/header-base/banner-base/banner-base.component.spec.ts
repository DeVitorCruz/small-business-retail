import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BannerBaseComponent } from './banner-base.component';

describe('BannerBaseComponent', () => {
  let component: BannerBaseComponent;
  let fixture: ComponentFixture<BannerBaseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BannerBaseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BannerBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
