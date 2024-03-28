import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ToDo} from "../../entity/ToDo";
// import {todos} from "../../mock/ToDoList";
import { TodoService } from "../../service/todo.service";
import {TodoapiService} from "../../service/todoapi.service";
import {__createBinding} from "tslib";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
  providers : [TodoService]
})
export class TodosComponent implements OnInit {

  public  toDoService : TodoService;
  public todoApiService : TodoapiService;
  public todos : ToDo[] = [];

  public todosDone : ToDo[] = [];
  public todosOpen : ToDo[] = [];

  constructor(toDoService : TodoService, todoApiService : TodoapiService){
    this.toDoService = toDoService;
    this.todoApiService = todoApiService;
  }

  ngOnInit() {
    // this.sortTodos();
    // this.todos = this.toDoService.getAllToDos();
    // this.toDoService.getAllToDos().subscribe(response =>
    //   this.todos = response
    // )
    // this.getAllTodos()
    this.getAllOpenTodos()
    this.getAllFinishedTodos()
  }
  // ngOnChanges(changes: SimpleChanges): void {
  //   this.getAllOpenTodos()
  //   this.getAllFinishedTodos()
  // }


  // getAllTodos() {
  //   this.toDoService.getAllToDos().subscribe(response =>
  //     this.todos = response
  //   )
  // }

  getAllOpenTodos(){
    this.toDoService.getAllOpenTodo().subscribe(response =>
      this.todosOpen = response
    )
  }

  getAllFinishedTodos(){
    this.toDoService.getAllFinishedTodo().subscribe(response =>
      this.todosDone = response
    )
  }

  create(){
    this.toDoService.createToDo().subscribe(_ => {
        this.getAllOpenTodos()
        this.getAllFinishedTodos()
    })
  }
}
