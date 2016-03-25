import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {TasksComponent} from './tasks';
import {LoginComponent} from './login';
import {RegistrationComponent} from './registration';

@Component({
  selector: 'app',
  moduleId: module.id,
  templateUrl: '../templates/app.html',
  directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  { path: '/tasks', name: 'Tasks', component: TasksComponent, useAsDefault: true },
  { path: '/login', name: 'Login', component: LoginComponent },
  { path: '/registration', name: 'Registration', component: RegistrationComponent }
])

export class AppComponent {
}
