import { Component, Inject } from '@angular/core';
import { ToDo } from "../../entity/ToDo";
import { EditentityService } from "../../service/editentity.service";
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TodoService } from "../../service/todo.service";

/**
 * Represents a PopUp Dialog where the user can edit a existing task
 */
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

  /**
   * Saving the edits to the task and closing the window
   */
  closePopUp(){
    this.todoService.updateToDo(this.todo).subscribe(_ => {
      this.editService.closePopup();
      location.reload()
      // this.editedEvent.emit("Done");
    })
  }

}
