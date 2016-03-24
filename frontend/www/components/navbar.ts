import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {AuthService} from '../services/auth';

@Component({
  selector: 'navbar',
  moduleId: module.id,
  templateUrl: '../templates/navbar.html',
  directives: [ROUTER_DIRECTIVES]
})

export class NavbarComponent {
  constructor(private _authService: AuthService) {
  }

  logout() {
    this._authService.logout();
  }
}
