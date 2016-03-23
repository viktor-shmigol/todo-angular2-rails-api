import {Component} from 'angular2/core';
import {Task} from '../../models/task';
import {TaskService} from '../../services/task';

@Component({
  selector: 'task-list',
  moduleId: module.id,
  templateUrl: '../../templates/tasks/list.html',
})
export class TaskList {
  tasks: Task[];

  constructor(taskService: TaskService) {
    this.tasks = taskService.load();
  }
}
