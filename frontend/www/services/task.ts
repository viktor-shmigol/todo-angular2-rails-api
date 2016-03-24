import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';
import {Task} from '../models/task';

@Injectable()
export class TaskService {
  tasks$: Observable<Task[]>;
  private _tasksObserver: Observer<Task[]>;
  private _dataStore: {
    tasks: Task[];
  };
  private headers;

  constructor(private _http: Http) {
    this.headers = new Headers({'Content-Type': 'application/json'});
    this.tasks$ = new Observable(observer =>
      this._tasksObserver = observer).share();
    this._dataStore = { tasks: [] };
  }

  load() {
    this._http.get('/api/tasks').map(response => response.json()).subscribe(data => {
      this._dataStore.tasks = data;
      this._tasksObserver.next(this._dataStore.tasks);
    }, error => console.log('Could not load tasks.'));
  }

  create(task) {
    this._http.post('/api/tasks', JSON.stringify({task: task}), { headers: this.headers })
      .map(response => response.json()).subscribe(data => {
      this._dataStore.tasks.push(data);
      this._tasksObserver.next(this._dataStore.tasks);
    }, error => console.log('Could not create task.'));
  }

  update(task) {
    this._http.put(`/api/tasks/${task.id}`, JSON.stringify({task: task}), { headers: this.headers })
      .map(response => response.json()).subscribe(data => {
      this._dataStore.tasks.forEach((task, i) => {
        if (task.id === data.id) { this._dataStore.tasks[i] = data; }
      });

      this._tasksObserver.next(this._dataStore.tasks);
    }, error => console.log('Could not update task.'));
  }

  delete(taskId: number) {
    this._http.delete(`/api/tasks/${taskId}`).subscribe(response => {
      this._dataStore.tasks.forEach((t, index) => {
        if (t.id === taskId) { this._dataStore.tasks.splice(index, 1); }
      });

      this._tasksObserver.next(this._dataStore.tasks);
    }, error => console.log('Could not delete task.'));
  }
}
