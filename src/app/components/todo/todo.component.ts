import {Component, Input, OnInit} from '@angular/core';
import {ToDo} from "../../entity/ToDo";
import { EditentityService } from "../../service/editentity.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})

export class TodoComponent implements OnInit{

  @Input() todo!: ToDo;

  constructor(private todoEditService : EditentityService) {

  }

  ngOnInit() {

  }

  editEntity() {
    this.todoEditService.editTodo(this.todo);
  }

}
