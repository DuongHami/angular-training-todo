import {Component, Input, OnInit, EventEmitter, Output, Inject} from '@angular/core';
import {ToDo} from "../../entity/ToDo";
import { EditentityService } from "../../service/editentity.service";
import { TodoService } from "../../service/todo.service";
import {TodosComponent} from "../todos/todos.component";

/**
 * Represent a single Todo Entity
 * has two ways to update the list: EventEmitter or ParentComponent
 */
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})

export class TodoComponent {

  @Input() todo!: ToDo;
  @Output() updateEvent = new EventEmitter<number>();

  constructor(
    private todoEditService : EditentityService,
    private todoService : TodoService,
    // @Inject(TodosComponent) private parent : TodosComponent
  ) { }

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
