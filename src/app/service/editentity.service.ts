import { Injectable } from '@angular/core';
import { BehaviorSubject} from "rxjs";
import { ToDo } from "../entity/ToDo";

@Injectable({
  providedIn: 'root'
})
export class EditentityService {

  // todosubject = new BehaviorSubject<ToDo>({} as ToDo);
  //
  // todosubject = this.todosubject.asObservable();

  editTodo(todo : ToDo){
    // this.todosubject.next(todo);
  }

  constructor() { }
}
