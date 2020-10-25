import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TealBackNavComponent } from './teal-back-nav.component';

describe('TealBackNavComponent', () => {
  let component: TealBackNavComponent;
  let fixture: ComponentFixture<TealBackNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TealBackNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TealBackNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
