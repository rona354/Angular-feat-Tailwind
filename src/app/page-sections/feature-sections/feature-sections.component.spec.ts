import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureSectionsComponent } from './feature-sections.component';

describe('FeatureSectionsComponent', () => {
  let component: FeatureSectionsComponent;
  let fixture: ComponentFixture<FeatureSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureSectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
