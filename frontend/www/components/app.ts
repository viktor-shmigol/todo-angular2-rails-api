import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {TasksComponent} from './tasks';
import {LoginComponent} from './login';

@Component({
  selector: 'app',
  moduleId: module.id,
  templateUrl: '../templates/app.html',
  directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  { path: '/',      name: 'root',  redirectTo: ['/Tasks']  },
  { path: '/tasks', name: 'Tasks', component: TasksComponent },
  { path: '/login', name: 'Login', component: LoginComponent }
])

export class AppComponent {
}
