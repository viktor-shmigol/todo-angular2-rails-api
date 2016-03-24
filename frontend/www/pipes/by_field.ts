import {Pipe} from 'angular2/core';

@Pipe({
  name: 'byField',
  pure: false
})

export class ByFieldPipe {
  transform(items, arg) {
    if(items) {
      return items.filter((item)=> item[arg[0]] === arg[1]);
    }
  }
}
