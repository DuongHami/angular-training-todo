import {Component, Input} from '@angular/core';
import { ToDo } from "../../entity/ToDo";
import { EditentityService } from "../../service/editentity.service";
import {TodoComponent} from "../todo/todo.component";

@Component({
  selector: 'app-edittodopopup',
  templateUrl: './edittodopopup.component.html',
  styleUrl: './edittodopopup.component.css'
})
export class EdittodopopupComponent {

  @Input() editTodo!: ToDo;

  constructor() {

  }


  // constructor(private todoEditService : EditentityService) {
  //   this.todoEditService.todosubject.subscribe(todo => {
  //     this.editTodo = todo
  //   });
  // }

  // closePopup() {
  //
  // }
  //
  // saveChanges(){
  //
  // }

}
