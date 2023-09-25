import { Component ,OnInit } from '@angular/core';

import { Todo } from '../../Todo';
import { ServiceNameService } from '../../service-name.service';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { TodosItemComponent } from '../todos-item/todos-item.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})


export class TodosComponent implements OnInit {
  localItem!: string;
  todos: Todo[]=[] ;
  alltodos :Todo[] = [] ;
  id: string;
  isfetching: boolean = false;
  ServiceNameService: any;
  sno: any;
  title: any;
  desc: any;

  constructor(private http:HttpClient,private serviceName: ServiceNameService){
    //  this.localItem == localStorage.getItem("todos");
    // if( this.localItem == null) {
    
    // this.todos = [
    //   // {
    //   //   sno :1,
    //   //   title :"This is Title1",
    //   //   desc :"Description",
    //   //   active :true

    //   // },
    //   // {
    //   //   sno :2,
    //   //   title :"This is Title2",
    //   //   desc :"Description",
    //   //   active :true

    //   // },
    //   // {
    //   //   sno :3,
    //   //   title : "This is Title3",
    //   //   desc :"Description",
    //   //   active :true

    //   // },
    //   // {
    //   //   sno :4,
    //   //   title : "This is Title4",
    //   //   desc :"Description",
    //   //   active :true

    //   // }
    // ]; }
    //  else {
    //   this.todos = JSON.parse(this.localItem);
    //  }
   }

 ngOnInit(): void{ 

  }

 deleteTodo ( todo:Todo): void{
    
    const i = this.todos.indexOf(todo);
    this.todos.splice(i,1);
    //  localStorage.setItem("todos", JSON.stringify(this.todos));
   

 }
 AddTodo( todo:Todo){
    
  const i = this.todos.indexOf(todo);
  this.todos.push(todo);
  // localStorage.setItem("todos", JSON.stringify(this.todos));
 

} onSubmit( add:{ sno:number ,title:string ,desc:string,active:string,id:string}) {
  console.log('add');
   const todo = {
    sno: this.sno,
    title : this.title,
    desc: this.desc,
    active :true,
    id : this.id,
    
   }
   
  //  this.todoAdd.emit(todo);


  //  console.log(add);
  //  const headers = new HttpHeaders({ 'myHeader':'firstTitle'});
  //   return this.http.post<{name:string}>('https://angularpractice-d25c4-default-rtdb.firebaseio.com/add.json',add ,{headers :headers}).subscribe((res) =>{
  //   console.log (res);});

   

   this.serviceName.addTodos(add);

   
    
  this.isfetching = true;
   this.serviceName.fetchTodo().subscribe((response) =>{
   this.alltodos = response;
    this.isfetching = false;
   });
   
   }

  
 
}

