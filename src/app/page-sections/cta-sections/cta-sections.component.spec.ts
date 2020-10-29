import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaSectionsComponent } from './cta-sections.component';

describe('CtaSectionsComponent', () => {
  let component: CtaSectionsComponent;
  let fixture: ComponentFixture<CtaSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtaSectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtaSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
