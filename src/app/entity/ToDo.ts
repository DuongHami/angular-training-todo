export class ToDo {
  id: number;
  taskname:string;
  completed:boolean;

  constructor(id: number, taskname: string, completed: boolean) {
    this.id = id;
    this.taskname = taskname;
    this.completed = completed;
  }

}
