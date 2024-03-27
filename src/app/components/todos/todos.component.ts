import {Component, Input, OnInit} from '@angular/core';
import {ToDo} from "../../entity/ToDo";
import {todos} from "../../mock/ToDoList";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit{

  @Input() todos : ToDo[] = todos;

  todosDone : ToDo[] = [];
  todosOpen : ToDo[] = [];

  constructor() {

  }

  ngOnInit() {
    this.sortTodos();
  }

  sortTodos(){
    this.todosDone = this.todos.filter(todo => todo.completed == true);
    this.todosOpen = this.todos.filter(todo => todo.completed == false);
  }


}
