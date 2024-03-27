import { Injectable } from '@angular/core';
import { todos } from "../mock/ToDoList";
import { ToDo } from "../entity/ToDo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private toDo : ToDo[] = todos;

  constructor() { }

  public getAllToDos() : ToDo[]{
    return todos;
  }

  public createToDo(todo:ToDo):void{
    todos.push(todo);
    // return todo;
  }

  public getToDoById(id:number): ToDo | undefined{
    return todos.find(item => item.id == id);
  }

  // public getT
}
