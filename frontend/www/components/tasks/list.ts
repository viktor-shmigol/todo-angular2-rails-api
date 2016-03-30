import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {Task} from '../../models/task';
import {TaskService} from '../../services/task';
import {ByFieldPipe} from '../../pipes/by_field';

@Component({
  selector: 'task-list',
  pipes: [ByFieldPipe],
  moduleId: module.id,
  templateUrl: '../../templates/tasks/list.html',
})

export class TaskListComponent {
  tasks: Observable<Task[]>;
  editForm: {};

  constructor(private _taskService: TaskService) {
    this.editForm = {};
    this.tasks = this._taskService.tasks$;
    this._taskService.load();
  }

  delete(task) {
    if (confirm('Are you sure?')) {
      this._taskService.delete(task.id);
    };
    return false;
  }

  update (task) {
    this._taskService.update(task);
    return false;
  }
}
