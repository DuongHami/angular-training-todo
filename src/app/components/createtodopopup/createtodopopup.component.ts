import {Component, Inject} from '@angular/core';
import { ToDo } from "../../entity/ToDo";
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TodoService } from "../../service/todo.service";
import { CreateService } from "../../service/create.service";

/**
 * Represents a PopUp Dialog where the user can create a task by entering a name and description
 */
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

  /**
   * Creating a task and closing the window, after that reloading the page
   */
  createTask(){
    this.todoService.createToDoNew(
      new ToDo(0, this.taskname, this.description, false)
    ).subscribe(_ => {
      this.createService.closePopup();
      location.reload()
    })
  }

  /**
   * Closing the window
   */
  closePopup(){
    this.createService.closePopup();
  }

}
