import {Component} from 'angular2/core';
import {AuthService} from '../services/auth';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_BINDINGS,FormBuilder,ControlGroup,Validators} from 'angular2/common';

@Component({
  moduleId: module.id,
  templateUrl: '../templates/registration.html',
  directives: [ROUTER_DIRECTIVES],
  viewBindings: [FORM_BINDINGS]
})

export class RegistrationComponent {
  registerForm: ControlGroup;

  constructor(private _authService: AuthService, fb: FormBuilder) {
    this.registerForm = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      password_confirmation: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    }, {validator: this.matchingPasswords('password', 'password_confirmation')});
  }

  registration() {
    this._authService.registration(this.registerForm.value);
  }

  matchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: ControlGroup) => {
      let passwordInput = group.controls[passwordKey];
      let passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({notEquivalent: true});
      }
    };
  }
}
