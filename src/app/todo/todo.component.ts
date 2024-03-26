import {Component, Input, OnInit} from '@angular/core';
import {ToDo} from "../entity/ToDo";
import {todos} from "../mock/ToDoList";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit{

  @Input() todo!: ToDo;

  todos : ToDo[] = todos;

  constructor() {

  }

  ngOnInit() {
  }

}
