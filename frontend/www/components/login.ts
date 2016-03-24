import {Component} from 'angular2/core';
import {User} from '../models/user';
import {AuthService} from '../services/auth';

@Component({
  moduleId: module.id,
  templateUrl: '../templates/login.html'
})

export class LoginComponent {
  user: User;

  constructor(private _authService: AuthService) {
    this.user = new User('', '', '');
  }

  login() {
    this._authService.login(this.user);
  }
}
