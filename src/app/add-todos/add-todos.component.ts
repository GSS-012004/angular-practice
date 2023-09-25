import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter,OnInit,Output } from '@angular/core';
import { Todo } from '../Todo';
import { ServiceNameService } from '../service-name.service';
import { map } from 'rxjs/internal/operators/map';
import { NgForm } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-add-todos',
  templateUrl: './add-todos.component.html',
  styleUrls: ['./add-todos.component.css']
})


export class AddTodosComponent 
 {
  title :string;
  desc :string; 
  alltodos :Todo[] = [] ;
  id: string;
  isfetching: boolean = false;
  ServiceNameService: any;
  sno: any;
  

  constructor(private http:HttpClient,private serviceName: ServiceNameService){}
  // constructor(private http:HttpClient ){}

  ngOnInit(): void {
    this.fetchTodos();

  }

  onTodosFetch(){
    this.fetchTodos();
  }
  
  @Output() todoAdd :EventEmitter<Todo> = new EventEmitter()

  onSubmit( add:{ sno:number ,title:string ,desc:string,active:string,id:string}) {
    console.log('add');
     const todo = {
      sno: this.sno,
      title : this.title,
      desc: this.desc,
      active :true,
      id : this.id,
      
     }
     
     this.todoAdd.emit(todo);


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

     private fetchTodos(){
      // this.isfetching = true;
      // this.http.get<{[key: string]:Todo}>('https://angularpractice-d25c4-default-rtdb.firebaseio.com/add.json').pipe (map((res)  => {
      //   const add = [];
      //   for(const key in res){
      //     if(res.hasOwnProperty(key)){
      //       add.push({...res[key],id: key})
      //     }
          
      //   }
      //   return add;
      // }))
      // .subscribe((add) =>{
      //   console.log (add);
      //   this.alltodos = add;
      //   this.isfetching = false;
      // })


     const add = [];
     this.isfetching = true;
   this.serviceName.fetchTodo().subscribe((response) =>{
   this.alltodos = response;
    this.isfetching = false;
   });

  }

   onDeleteTodos(id:string){
    // this.ServiceNameService.deleteTodo(id);
    this.http.delete('https://angularpractice-d25c4-default-rtdb.firebaseio.com/add/'+id+'/.json')
    .subscribe();
    
    
    
  }
  onDeleteAllTodos(){
    
    this.http.delete('https://angularpractice-d25c4-default-rtdb.firebaseio.com/add/.json')
    .subscribe();
    
  
    
  }
      
}
   
     
// function onDeleteTodos(id: any, string: any) {
//   throw new Error('Function not implemented.');
// }

