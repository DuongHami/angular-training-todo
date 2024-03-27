import {Component, Input, OnInit} from '@angular/core';
import {ToDo} from "../../entity/ToDo";
import { EditentityService } from "../../service/editentity.service";
import { TodoService } from "../../service/todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})

export class TodoComponent implements OnInit{

  @Input() todo!: ToDo;

  constructor(private todoEditService : EditentityService, private todoService : TodoService) {

  }

  ngOnInit() {

  }

  openPopUp(todo : ToDo){
    this.todoEditService.openPopup(todo);
  }

  deleteTodo(todo: ToDo){
    this.todoService.deleteToDo(todo)
  }

}
