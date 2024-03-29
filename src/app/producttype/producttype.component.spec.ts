import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducttypeComponent } from './producttype.component';

describe('ProducttypeComponent', () => {
  let component: ProducttypeComponent;
  let fixture: ComponentFixture<ProducttypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducttypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProducttypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
