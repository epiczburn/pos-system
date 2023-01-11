import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinenotifyComponent } from './linenotify.component';

describe('LinenotifyComponent', () => {
  let component: LinenotifyComponent;
  let fixture: ComponentFixture<LinenotifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinenotifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinenotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
