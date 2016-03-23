import {Component} from 'angular2/core';
import {TaskList} from './tasks/list';
import {TaskForm} from './tasks/form';

@Component({
  selector: 'app',
  moduleId: module.id,
  templateUrl: '../templates/app.html',
  directives: [TaskList, TaskForm],
})
export class AppComponent {
}
