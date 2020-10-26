import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkNavFeatWhiteHeaderComponent } from './dark-nav-feat-white-header.component';

describe('DarkNavFeatWhiteHeaderComponent', () => {
  let component: DarkNavFeatWhiteHeaderComponent;
  let fixture: ComponentFixture<DarkNavFeatWhiteHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarkNavFeatWhiteHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkNavFeatWhiteHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
