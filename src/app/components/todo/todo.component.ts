import {Component, Input, OnInit, EventEmitter, Output, Inject} from '@angular/core';
import {ToDo} from "../../entity/ToDo";
import { EditentityService } from "../../service/editentity.service";
import { TodoService } from "../../service/todo.service";
import {TodosComponent} from "../todos/todos.component";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})

export class TodoComponent implements OnInit{

  @Input() todo!: ToDo;
  @Output() updateEvent = new EventEmitter<number>();

  constructor(private todoEditService : EditentityService, private todoService : TodoService, @Inject(TodosComponent) private parent : TodosComponent) {

  }

  ngOnInit() {

  }

  openPopUp(todo : ToDo){
    this.todoEditService.openPopup(todo);
  }

  deleteTodo(todo: ToDo){
    this.todoService.deleteToDoById(todo.id).subscribe( _ => {
      this.updateEvent.emit(todo.id);
      // this.parent.updateTodos()
    })
  }

}
