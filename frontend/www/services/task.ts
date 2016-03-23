import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
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

  constructor(private _http: Http) {
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

  create(todo) {
    this._http.post('/api/tasks', todo)
      .map(response => response.json()).subscribe(data => {
      this._dataStore.tasks.push(data);
      this._tasksObserver.next(this._dataStore.tasks);
    }, error => console.log('Could not create todo.'));
  }

  update(todo) {
    this._http.put(`/api/tasks/${todo.id}`, todo)
      .map(response => response.json()).subscribe(data => {
      this._dataStore.tasks.forEach((todo, i) => {
        if (todo.id === data.id) { this._dataStore.tasks[i] = data; }
      });

      this._tasksObserver.next(this._dataStore.tasks);
    }, error => console.log('Could not update todo.'));
  }

  delete(todoId: number) {
    this._http.delete(`/api/tasks/${todoId}`).subscribe(response => {
      this._dataStore.tasks.forEach((t, index) => {
        if (t.id === todoId) { this._dataStore.tasks.splice(index, 1); }
      });

      this._tasksObserver.next(this._dataStore.tasks);
    }, error => console.log('Could not delete todo.'));
  }
}
