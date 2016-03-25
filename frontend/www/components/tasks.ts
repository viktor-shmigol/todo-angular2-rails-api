import {Component} from 'angular2/core';
import {CanActivate} from 'angular2/router';
import {TaskListComponent} from './tasks/list';
import {TaskFormComponent} from './tasks/form';
import {NavbarComponent} from './navbar';

@Component({
  moduleId: module.id,
  templateUrl: '../templates/tasks.html',
  directives: [TaskListComponent, TaskFormComponent, NavbarComponent]
})

@CanActivate(()=> {
  if(!localStorage.getItem('token')) {
    window.location.pathname = '/login';
    return false;
  }
  return true;
})

export class TasksComponent {
}
