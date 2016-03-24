export class Task {
  id: number;
  name: string;
  description: string;
  done: boolean;

  constructor(name: string, description: string, done?: boolean, id?: number) {
    this.id = id || null;
    this.name = name;
    this.description = description;
    this.done = done || false;
  }
}
