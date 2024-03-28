import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CreatetodopopupComponent} from "../components/createtodopopup/createtodopopup.component";

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  constructor(private dialog : MatDialog) { }

  openPopup(){
    if(this.dialog.openDialogs.length==0){
      this.dialog.open(CreatetodopopupComponent)
    }
  }

  closePopup(){
    this.dialog.closeAll()
  }
}
