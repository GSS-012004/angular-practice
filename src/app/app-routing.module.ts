import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { MycomponentComponent } from './mycomponent/mycomponent.component';
// import { TodosComponent } from './mycomponent/todos/todos.component';

// const routes: Routes = [{
//   path:'',component:MycomponentComponent
// },
// {path:'/todos',component:TodosComponent}];
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
