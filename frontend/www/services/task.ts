import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';

export interface Todo {
  id: number;
  createdAt: number;
  value: string;
}

@Injectable()
export class TaskService {
  todos$: Observable<Todo[]>;
  private _todosObserver: Observer<Todo[]>;
  private _dataStore: {
    todos: Todo[];
  };

  constructor(private _http: Http) {
    this.todos$ = new Observable(observer =>
      this._todosObserver = observer).share();
    this._dataStore = { todos: [] };
  }

  load() {
    this._http.get('/api/tasks').map(response => response.json()).subscribe(data => {
      this._dataStore.todos = data;
      this._todosObserver.next(this._dataStore.todos);
    }, error => console.log('Could not load todos.'));
  }

  create(todo) {
    this._http.post('/api/tasks', todo)
      .map(response => response.json()).subscribe(data => {
      this._dataStore.todos.push(data);
      this._todosObserver.next(this._dataStore.todos);
    }, error => console.log('Could not create todo.'));
  }

  update(todo) {
    this._http.put(`/api/tasks/${todo.id}`, todo)
      .map(response => response.json()).subscribe(data => {
      this._dataStore.todos.forEach((todo, i) => {
        if (todo.id === data.id) { this._dataStore.todos[i] = data; }
      });

      this._todosObserver.next(this._dataStore.todos);
    }, error => console.log('Could not update todo.'));
  }

  delete(todoId: number) {
    this._http.delete(`/api/tasks/${todoId}`).subscribe(response => {
      this._dataStore.todos.forEach((t, index) => {
        if (t.id === todoId) { this._dataStore.todos.splice(index, 1); }
      });

      this._todosObserver.next(this._dataStore.todos);
    }, error => console.log('Could not delete todo.'));
  }
}
