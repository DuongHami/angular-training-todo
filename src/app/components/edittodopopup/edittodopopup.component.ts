import {Component, EventEmitter, Inject, Input, Output} from '@angular/core';
import { ToDo } from "../../entity/ToDo";
import { EditentityService } from "../../service/editentity.service";
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {TodoService} from "../../service/todo.service";
import {TodosComponent} from "../todos/todos.component";

@Component({
  selector: 'app-edittodopopup',
  templateUrl: './edittodopopup.component.html',
  styleUrl: './edittodopopup.component.css'
})

export class EdittodopopupComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public todo: ToDo,
              private editService : EditentityService,
              private todoService : TodoService,
  ) {}

  // @Output() editedEvent = new EventEmitter<string>();

  closePopUp(){
    this.todoService.updateToDo(this.todo).subscribe(_ => {
      this.editService.closePopup();
      location.reload()
      // this.editedEvent.emit("Done");
    })
  }

}
