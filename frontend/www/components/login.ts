import {Component} from 'angular2/core';
import {AuthService} from '../services/auth';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  moduleId: module.id,
  templateUrl: '../templates/login.html',
  directives: [ROUTER_DIRECTIVES]
})

export class LoginComponent {
  user: {};

  constructor(private _authService: AuthService) {
    this.user = {};
  }

  login() {
    this._authService.login(this.user);
  }
}
