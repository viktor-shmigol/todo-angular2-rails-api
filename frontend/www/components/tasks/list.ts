import {Component} from 'angular2/core';
import {Task} from '../../models/task';
import {TaskService} from '../../services/task';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'task-list',
  moduleId: module.id,
  templateUrl: '../../templates/tasks/list.html',
})

export class TaskList {
  tasks: Observable<Task[]>;

  constructor(private _taskService: TaskService) {
    this.tasks = this._taskService.tasks$;
    this._taskService.load();
  }

  delete(task) {
    if (confirm('Are you sure?')) {
      this._taskService.delete(task.id);
    };
  }
}
