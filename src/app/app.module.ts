import { NgModule } from '@angular/core';
import { FormArray, FormsModule, NgForm, NgModel, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
// import { TodosComponent } from './mycomponent/todos/todos.component';
import { TdformComponent } from './tdform/tdform.component';
import { RformsComponent } from './rforms/rforms.component';



@NgModule({
  declarations: [
    AppComponent,
    MycomponentComponent,
    // TodosComponent,
    TdformComponent,
    RformsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
