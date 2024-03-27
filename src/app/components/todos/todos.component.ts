import {Component, Input, OnInit} from '@angular/core';
import {ToDo} from "../../entity/ToDo";
// import {todos} from "../../mock/ToDoList";
import { TodoService } from "../../service/todo.service";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
  providers : [TodoService]
})
export class TodosComponent implements OnInit{

  public  toDoService : TodoService;

  // todosDone : ToDo[] = [];
  // todosOpen : ToDo[] = [];

  constructor(toDoService : TodoService) {
    this.toDoService = toDoService
  }

  ngOnInit() {
    // this.sortTodos();
  }

  // sortTodos(){
  //   this.todosDone = this.todos.filter(todo => todo.completed == true);
  //   this.todosOpen = this.todos.filter(todo => todo.completed == false);
  // }


}
