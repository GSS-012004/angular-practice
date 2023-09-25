import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from '../mycomponent/todos/todos.component';
import { AddTodosComponent } from '../add-todos/add-todos.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';

const routes:Routes =[
  // {
  //   path :'create',
  //   component: TodosComponent
  // },

  // {
  //   path: 'list',
  //   component:AddTodosComponent
  // },

  {
    path :'',
    children:[
      {
        path :'create',
        component: TodosComponent
      },
    
      {
        path: 'list',
        component:AddTodosComponent
      },
      {
        path:'',
        redirectTo:'list',
        pathMatch:'full',
      }
    
    ]
  }
]



@NgModule({
  declarations: [
  TodosComponent,
  AddTodosComponent,
  
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class TodoListModule { }
