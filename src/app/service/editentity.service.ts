import { Injectable } from '@angular/core';
import { ToDo } from "../entity/ToDo";
import { EdittodopopupComponent } from "../components/edittodopopup/edittodopopup.component";
import { MatDialog } from "@angular/material/dialog";

@Injectable({
  providedIn: 'root'
})
export class EditentityService {

  constructor(private dialog : MatDialog) { }

  openPopup(todo : ToDo){
    if(this.dialog.openDialogs.length==0){
      this.dialog.open(EdittodopopupComponent, {
        data:todo
      })
    }
  }

  closePopup(){
    this.dialog.closeAll()
  }
}
