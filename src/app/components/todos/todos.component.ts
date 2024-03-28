import {Component, Injectable, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ToDo} from "../../entity/ToDo";
import { TodoService } from "../../service/todo.service";
import {EditentityService} from "../../service/editentity.service";
import {CreateService} from "../../service/create.service";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
  providers : [TodoService]
})
export class TodosComponent implements OnInit {

  public  toDoService : TodoService;
  public todos : ToDo[] = [];

  public todosDone : ToDo[] = [];
  public todosOpen : ToDo[] = [];

  constructor(toDoService : TodoService, private createService : CreateService){
    this.toDoService = toDoService;
  }

  ngOnInit() {
    this.getAllOpenTodos()
    this.getAllFinishedTodos()
  }

  updateTodos(){
    this.getAllOpenTodos()
    this.getAllFinishedTodos()
  }

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

  createNew(){
    this.createService.openPopup();
  }
}
