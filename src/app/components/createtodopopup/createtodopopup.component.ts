import {Component, Inject} from '@angular/core';
import { ToDo } from "../../entity/ToDo";
import { EditentityService } from "../../service/editentity.service";
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {TodoService} from "../../service/todo.service";
import {CreateService} from "../../service/create.service";

@Component({
  selector: 'app-createtodopopup',
  templateUrl: './createtodopopup.component.html',
  styleUrl: './createtodopopup.component.css'
})
export class CreatetodopopupComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public todo: ToDo,
              private createService : CreateService,
              private todoService : TodoService,
  ) {}

  taskname : string = ""
  description : string = ""

  create(){

    this.todoService.createToDoNew(
      new ToDo(0, this.taskname, this.description, false)
    ).subscribe(_ => {
      this.createService.closePopup();
      location.reload()
    })
  }

  closePopup(){
    this.createService.closePopup();
  }

}
