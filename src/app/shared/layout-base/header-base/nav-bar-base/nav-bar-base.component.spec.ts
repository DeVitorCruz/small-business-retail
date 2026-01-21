import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NavBarBaseComponent } from './nav-bar-base.component';

describe('NavBarBaseComponent', () => {
  let component: NavBarBaseComponent;
  let fixture: ComponentFixture<NavBarBaseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NavBarBaseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavBarBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
