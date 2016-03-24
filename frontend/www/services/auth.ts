import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {Router} from 'angular2/router';

@Injectable()
export class AuthService {
  private headers;

  constructor(public router: Router, public http: Http) {
    this.headers = new Headers({'Content-Type': 'application/json'});
  }

  login(user) {
    let body = JSON.stringify(user);
    this.http.post('/api/sessions', body, { headers: this.headers }).subscribe(
      response => {
        localStorage.setItem('token', response.json().token);
        this.router.navigate(['Tasks']);
      },
      error => {
        alert(error.text());
      }
    );
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['Login']);
  }

  registration(user) {
    let body = JSON.stringify({user: user});
    this.http.post('/api/users', body, { headers: this.headers }).subscribe(
      response => {
        localStorage.setItem('token', response.json().token);
        this.router.navigate(['Tasks']);
      },
      error => {
        alert(error.text());
      }
    );
  }
}
