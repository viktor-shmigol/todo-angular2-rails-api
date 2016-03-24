import {Component} from 'angular2/core';
import {Task} from '../../models/task';
import {TaskService} from '../../services/task';

@Component({
  selector: 'task-form',
  moduleId: module.id,
  templateUrl: '../../templates/tasks/form.html',
})

export class TaskFormComponent {
  task: Task;

  constructor(private _taskService: TaskService) {
    this.task = new Task('', '');
  }

  submit() {
    this._taskService.create(this.task);
    this.task = new Task('', '');
  }
}
