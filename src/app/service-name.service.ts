import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { Todo } from './Todo';

@Injectable({
  providedIn: 'root'
})
export class ServiceNameService {

  constructor(private http:HttpClient) { }


addTodos( add:{ sno:number ,title:string ,desc:string,active:string,id:string}){
  console.log(add);
     const headers = new HttpHeaders({ 'myHeader':'firstTitle'});
     this.http.post<{name:string}>('https://angularpractice-d25c4-default-rtdb.firebaseio.com/add.json',add ,{headers :headers}).subscribe((res) =>{
      console.log (res);});

}


fetchTodo(){
  
  return this.http.get<{[key: string]:Todo}>('https://angularpractice-d25c4-default-rtdb.firebaseio.com/add.json').pipe (map((res)  => {
    const add = [];
    for(const key in res){
      if(res.hasOwnProperty(key)){
        add.push({...res[key],id: key})
      }
      
    }
    return add;
  }))
  

}


deleteTodo(id:string){ 
  this.http.delete('https://angularpractice-d25c4-default-rtdb.firebaseio.com/add/'+id+'/.json')
      .subscribe();

}


deleteAllTodo(){
  this.http.delete('https://angularpractice-d25c4-default-rtdb.firebaseio.com/add/.json')
      .subscribe();

}



}
