import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin-and-register',
  templateUrl: './signin-and-register.component.html',
  styleUrls: ['./signin-and-register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SigninAndRegisterComponent {

  loginForm: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit(): void {
    this.submitted = true;
  }

}
