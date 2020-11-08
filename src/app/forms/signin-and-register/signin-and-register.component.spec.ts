import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';

import { SigninAndRegisterComponent } from './signin-and-register.component';

describe('SigninAndRegisterComponent', () => {
  let component: SigninAndRegisterComponent;
  let fixture: ComponentFixture<SigninAndRegisterComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SigninAndRegisterComponent],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
      .compileComponents()
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninAndRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('form'));
    el = de.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set submitted to be true', () => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  });

  it('should call onSubmit method', () => {
    // fixture.detectChanges();
    spyOn(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(1);
  });

  it('form should be invalid', () => {
    component.loginForm.controls['email'].setValue('');
    component.loginForm.controls['password'].setValue('');
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('form should be valid', () => {
    component.loginForm.controls['email'].setValue('jembut@gmail.com');
    component.loginForm.controls['password'].setValue('12345678');
    expect(component.loginForm.valid).toBeTruthy();
  })
});
