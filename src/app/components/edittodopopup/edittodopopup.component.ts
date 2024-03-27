import {Component, Inject, Input} from '@angular/core';
import { ToDo } from "../../entity/ToDo";
import { EditentityService } from "../../service/editentity.service";
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {TodoService} from "../../service/todo.service";

@Component({
  selector: 'app-edittodopopup',
  templateUrl: './edittodopopup.component.html',
  styleUrl: './edittodopopup.component.css'
})
export class EdittodopopupComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public todo: ToDo, private editService : EditentityService, private todoService : TodoService) {}

  closePopUp(){
    this.editService.closePopup();
    this.todoService.updateToDo(this.todo)
  }


}
