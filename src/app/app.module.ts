import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { MycomponentsComponent } from './mycomponents/mycomponents.component';
import { TodosComponent } from './mycomponent/todos/todos.component';
import { TodosItemComponent } from './mycomponent/todos-item/todos-item.component';
import { AddTodosComponent } from './add-todos/add-todos.component';
import { FormsModule, NgForm } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoContainerComponent } from './todo-container/todo-container.component';
import { TodoErrorComponent } from './todo-error/todo-error.component';
import { TodoListModule } from './todo-list/todo-list.module';


@NgModule({
  declarations:[
    AppComponent,
    // TodosComponent,
    // TodosItemComponent,
    //  AddTodosComponent,
    TodoContainerComponent,
    TodoErrorComponent,
   
    ],
    
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    
    ],
    
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
