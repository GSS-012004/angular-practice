import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TodosComponent } from './mycomponent/todos/todos.component';
import { AddTodosComponent } from './add-todos/add-todos.component';
import { TodoContainerComponent} from'./todo-container/todo-container.component'
import { TodoErrorComponent } from './todo-error/todo-error.component';
import { TodoListModule } from './todo-list/todo-list.module';

// const routes: Routes = [
//   // {
//   //   path:'',
//   //   redirectTo:'home',
//   //   pathMatch:'full',
//   // },
//   // {
//   //   path:'create',
//   //   component:TodosComponent,
//   // },
//   // {
//   //   path:'list',
//   //   component:AddTodosComponent,
//   // },
  
//   {
//     path:'home',
//     component:AppComponent,
//   },
//   {
//     path:'container',
//     loadChildren:() => import('./todo-container/todo-container.module').then(m => m.TodoContainerModule),
  
//    },
//   // {
//   //   path:'**',
//   //   component:TodoErrorComponent,
//   // },

//   // {
//   //   path:'list',
//   //   loadChildren:() => import('./add-todos/add-todos.component').then(m => m.AddTodosComponent)

//   // },
//   // {
//   //   path:'create',
//   //   loadChildren:() => import('./mycomponent/todos/todos.component').then (m => m.TodosComponent)
//   // }
  
// ];



const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'list',
  //   pathMatch: 'full',
  // },
  {
    path: 'container',
    loadChildren: () => import('./todo-list/todo-list.module').then(m => m.TodoListModule),
  },
  {
    path: '**',
    component: TodoErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),TodoListModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }



// const routes: Routes = [
//   { path: '', component: HomeComponent},

//  //{ path:'', redirectTo: 'Home', pathMatch: 'full'},
// { path: 'Home', component: HomeComponent },
// { path: 'First', component: FirstComponent },
// { path: 'Second', component: SecondComponent },
// { path: '**',component: ErrorComponent },
// // { path: '',   redirectTo: '/first-component', pathMatch: 'full' },
// // { path: '**', component: PageNotFoundComponent },  
// ];



// const routes: Routes = [
//   { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
//   { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
//   // ...
// ];
