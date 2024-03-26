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

  constructor() {

  }

  ngOnInit() {
  }


}
