import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ToDo} from "../../entity/ToDo";
// import {todos} from "../../mock/ToDoList";
import { TodoService } from "../../service/todo.service";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
  providers : [TodoService]
})
export class TodosComponent implements OnInit {

  public  toDoService : TodoService;

  // todosDone : ToDo[] = [];
  // todosOpen : ToDo[] = [];
  // todos : ToDo[] = [];

  constructor(toDoService : TodoService) {
    this.toDoService = toDoService
  }

  ngOnInit() {
    // this.sortTodos();
    // this.todos = this.toDoService.getAllToDos();
  }

  createTodo(){
    this.toDoService.createToDo(new ToDo(10, "New Taskname", "New Description", false));
  }

  // sortTodos(){
  //   this.todosDone = this.toDoService.getAllToDos().filter(todo => todo.completed == true);
  //   this.todosOpen = this.toDoService.getAllToDos().filter(todo => todo.completed == false);
  // }

}
