import {Component} from 'angular2/core';
import {TaskListComponent} from './tasks/list';
import {TaskFormComponent} from './tasks/form';
import {NavbarComponent} from './navbar';

@Component({
  moduleId: module.id,
  templateUrl: '../templates/tasks.html',
  directives: [TaskListComponent, TaskFormComponent, NavbarComponent]
})

export class TasksComponent {
}
