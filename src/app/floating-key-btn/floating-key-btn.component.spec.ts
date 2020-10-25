import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingKeyBtnComponent } from './floating-key-btn.component';

describe('FloatingKeyBtnComponent', () => {
  let component: FloatingKeyBtnComponent;
  let fixture: ComponentFixture<FloatingKeyBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatingKeyBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingKeyBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
