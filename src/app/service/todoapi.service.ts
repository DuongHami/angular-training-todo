import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ToDo} from "../entity/ToDo";

@Injectable({
  providedIn: 'root'
})
export class TodoapiService {

  baseUrl : string = "http://localhost:8080/todo";
  username : string = "admin";
  password : string = "admin";

  constructor(private http: HttpClient) { }

  private authorization() {
    return {
      headers: {
        Authorization: "Basic " + btoa(this.username + ":" + this.password)
      }
    }
  }

  getAllTodo(): Observable<ToDo[]>{
    return this.http.get<ToDo[]>(`${this.baseUrl}/all`, this.authorization());
  }

  createTodo(todo : ToDo) : Observable<ToDo> {
    return this.http.post<ToDo>(this.baseUrl, todo, this.authorization());
  }

  updateTodo(todo : ToDo) : Observable<ToDo> {
    return this.http.put<ToDo>(this.baseUrl, todo, this.authorization())
  }

  // deleteTodo(todo : ToDo) : Observable<ToDo> {
  //   return this.http.delete<ToDo>(this.baseUrl, this.authorization())
  // }

  deleteTodoById(id : number) : Observable<ToDo> {
    return this.http.delete<ToDo>(`${this.baseUrl}/${id}`, this.authorization())
  }

  getTodoById(id : number): Observable<ToDo>{
    return this.http.get<ToDo>(`${this.baseUrl}/${id}`, this.authorization());
  }

  getAllFinishedTodo(): Observable<ToDo[]>{
    return this.http.get<ToDo[]>(`${this.baseUrl}/finished`, this.authorization());
  }

  getAllOpenTodo(): Observable<ToDo[]>{
    return this.http.get<ToDo[]>(`${this.baseUrl}/open`, this.authorization());
  }
}
