export class ToDo {
  id: number;
  taskname:string;
  description: string;
  completed:boolean;

  constructor(id: number, taskname: string, description: string, completed: boolean) {
    this.id = id;
    this.taskname = taskname;
    this.description = description;
    this.completed = completed;
  }

}
