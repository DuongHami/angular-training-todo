import { Injectable } from '@angular/core';
import { todos } from "../mockData/ToDoList";
import { ToDo } from "../entity/ToDo";
import {TodoapiService} from "./todoapi.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos : ToDo[] = todos;
  private todoApiService : TodoapiService;

  constructor(todoApiService : TodoapiService) {
    this.todoApiService = todoApiService;
  }

  public getAllToDos():Observable<ToDo[]>{
    return this.todoApiService.getAllTodo();
  }

  public createToDo():Observable<ToDo>{
    // todos.push(todo);
    return this.todoApiService.createTodo(new ToDo(0, "NewTask", "NewTask", false));
  }

  public createToDoNew(todo : ToDo):Observable<ToDo>{
    return this.todoApiService.createTodo(todo)
  }

  public updateToDo(todo:ToDo):Observable<ToDo>{
    return this.todoApiService.updateTodo(todo)
    // const index = this.todos.findIndex(item => item.id === todo.id);
    // this.todos[index] = todo;
  }

  // public deleteToDo(todo:ToDo){
  //   // this.todos.splice(this.todos.indexOf(todo), 1);
  //
  // }

  public deleteToDoById(id:number) : Observable<ToDo>{
    // this.todos.splice(id, 1);
    return this.todoApiService.deleteTodoById(id)
  }

  public getToDoById(id:number): Observable<ToDo> {
    // return todos.find(item => item.id == id);
    return this.todoApiService.getTodoById(id)
  }

  public getAllFinishedTodo(){
    // return todos.filter(todo => todo.completed == true)
    return this.todoApiService.getAllFinishedTodo()
  }

  public getAllOpenTodo(){
    // return todos.filter(todo => todo.completed == false)
    return this.todoApiService.getAllOpenTodo()
  }
}
