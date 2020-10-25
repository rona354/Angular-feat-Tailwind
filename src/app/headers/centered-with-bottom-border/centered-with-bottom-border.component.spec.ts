import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenteredWithBottomBorderComponent } from './centered-with-bottom-border.component';

describe('CenteredWithBottomBorderComponent', () => {
  let component: CenteredWithBottomBorderComponent;
  let fixture: ComponentFixture<CenteredWithBottomBorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenteredWithBottomBorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenteredWithBottomBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
