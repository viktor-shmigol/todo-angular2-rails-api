import {Component} from 'angular2/core';
import {AuthService} from '../services/auth';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  moduleId: module.id,
  templateUrl: '../templates/registration.html',
  directives: [ROUTER_DIRECTIVES]
})

export class RegistrationComponent {
  user: {};

  constructor(private _authService: AuthService) {
    this.user = {};
  }

  registration() {
    this._authService.registration(this.user);
  }
}
