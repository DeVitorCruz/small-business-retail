import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FooterBaseComponent } from './footer-base.component';

describe('FooterBaseComponent', () => {
  let component: FooterBaseComponent;
  let fixture: ComponentFixture<FooterBaseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FooterBaseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
