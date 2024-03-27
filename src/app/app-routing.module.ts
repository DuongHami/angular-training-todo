import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from "./components/todos/todos.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import {DataprotectionComponent} from "./components/dataprotection/dataprotection.component";
import {ImprintComponent} from "./components/imprint/imprint.component";

const routes: Routes = [
  {path: "",  component : HomeComponent},
  {path: "todos",  component : TodosComponent},
  {path: "login",  component : LoginComponent},
  {path: "dataprotection",  component : DataprotectionComponent},
  {path: "imprint",  component : ImprintComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
