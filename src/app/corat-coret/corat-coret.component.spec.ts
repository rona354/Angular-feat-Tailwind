import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoratCoretComponent } from './corat-coret.component';

describe('CoratCoretComponent', () => {
  let component: CoratCoretComponent;
  let fixture: ComponentFixture<CoratCoretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoratCoretComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoratCoretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
