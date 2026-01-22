import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutctListComponent } from './produtct-list.component';

describe('ProdutctListComponent', () => {
  let component: ProdutctListComponent;
  let fixture: ComponentFixture<ProdutctListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutctListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutctListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
