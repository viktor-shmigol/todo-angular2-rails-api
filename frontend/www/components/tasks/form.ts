import {Component} from 'angular2/core';
import {Task} from '../../models/task';
// import {TasksService} from '../../services/tasks';

@Component({
  selector: 'task-form',
  moduleId: module.id,
  templateUrl: '../../templates/tasks/form.html',
})

export class TaskForm {
  task: Task;

  // constructor(@Inject(TasksService) private TasksService:any) {}

  // submit() {
  //   this.TasksService.add(this.task.name, this.task.description);
  //   this.task.name = '';
  //   this.task.description = '';
  // }
}
