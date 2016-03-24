import {provide, enableProdMode} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, APP_BASE_HREF} from 'angular2/router';
import {HTTP_PROVIDERS, HTTP_BINDINGS} from 'angular2/http';
import 'rxjs/add/operator/map';
import {AppComponent} from './components/app';
import {TaskService} from './services/task';
import {AuthService} from './services/auth';

if ('<%= ENV %>' === 'prod') { enableProdMode(); }

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  HTTP_BINDINGS,
  TaskService,
  AuthService,
  provide(APP_BASE_HREF, { useValue: '<%= APP_BASE %>' })
]);
