import { Injectable } from '@angular/core';
import { todos } from "../mock/ToDoList";
import { ToDo } from "../entity/ToDo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos : ToDo[] = todos;

  constructor() { }

  public getAllToDos() : ToDo[]{
    return todos;
  }

  public createToDo(todo:ToDo):void{
    todos.push(todo);
    // return todo;
  }

  public updateToDo(todo:ToDo){
    todos[todo.id] = todo;
  }

  public deleteToDo(todo:ToDo){
    this.todos.splice(this.todos.indexOf(todo), 1);
  }

  public deleteToDoById(id:number){
    this.todos.splice(id, 1);
  }

  public getToDoById(id:number): ToDo | undefined{
    return todos.find(item => item.id == id);
  }

  public getAllFinishedTodo(){
    return todos.filter(todo => todo.completed == true)
  }

  public getAllOpenTodo(){
    return todos.filter(todo => todo.completed == false)
  }
}
