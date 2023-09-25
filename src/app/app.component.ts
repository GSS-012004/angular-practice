// import { NgIf } from '@angular/common';
// import { Component, Output ,NgModule} from '@angular/core';

// // import { FormsModule} from '@angular/forms';
// // import { NgForm} from '@angular/forms';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })


// export class AppComponent {
//   title = 'my-project';
  
  
// var3:string[] = ["abc","xyz","pqr"];

// //  @Output() var3Delete: EventEmitter <string[]>= new EventEmitter();
//  constructor () {}
//  ngOnInit () : void {
// // console.log(this.var);
// // console.log(this.title);
//  }

//   //  deletevar3(var3)
//   var1:number = 34;
//   var2:string = "This is the variable string";
 


// change( ) {
//   //  let input_value = input;
//   // this.var3.push(input);
//   //  let var5 = document.getElementById("demo1") ;
//   //  console.log(var5)
//   // console.log (document.getElementById("demo1") );
//   // const inputValue = inputElement.value;
  
//   const inputElement = document.getElementById ("demo1") as HTMLInputElement;
//   if(inputElement.value.trim()!== '')
//   {
//     const inputValue = inputElement.value;
//   this.var3.push(inputValue)
//    inputElement.value = " ";
   
//     // let x = "please enter the valid input";
//   }

//  else {
   
//    alert("Please enter the valid input ");
// }}
// // onClick(var3:string[]){
// //   this.var3Delete.emit(var3);

// // }
// onClick( inx:number): void{

    
//     this.var3. splice(inx,1);
//     // delete this.var3(inx);
// }



 


// // @NgModule ({
// //   imports:[FormsModule]
// // })

// // export class NgForm {
  

// // }
// user:object = { 
//   firstName: ' '};

  
//   onSubmit(user:object) {

//     console.log('Form submitted with date:',user)
//   }





// }


import { Component, NgModule } from '@angular/core';
import { EmailValidator, FormControl, FormsModule, NgForm, NgModel } from '@angular/forms';
import { FormGroup,Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  // templateUrl: './mycomponent.component.html',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
  
  
 // styleUrls: ['./mycomponent.component.css']
})
// @NgModule ({
//   imports:[FormsModule]
// })


export class AppComponent {
  // title : 'forms';
  favoriteColorControl = new FormControl('');
  var3:string[] = ["abc","xyz","pqr"];
  title = 'my-project';
  FirstName:string = '';
  lastName:string = '';
 
  
  
// var3:string[] = ["abc","xyz","pqr"];

//  @Output() var3Delete: EventEmitter <string[]>= new EventEmitter();
 constructor () {}
 ngOnInit () : void {
// console.log(this.var);
// console.log(this.title);
 }

  //  deletevar3(var3)
  var1:number = 34;
  var2:string = "This is the variable string";
 


change( ) {
  //  let input_value = input;
  // this.var3.push(input);
  //  let var5 = document.getElementById("demo1") ;
  //  console.log(var5)
  // console.log (document.getElementById("demo1") );
  // const inputValue = inputElement.value;
  
  const inputElement = document.getElementById ("name") as HTMLInputElement;
  if(inputElement.value.trim()!== '')
  {
    const inputValue = inputElement.value;
  this.var3.push(inputValue)
   inputElement.value = " ";
   
    // let x = "please enter the valid input";
  }

 else {
   
   alert("Please enter the valid input ");
}}
// onClick(var3:string[]){
//   this.var3Delete.emit(var3);

// }
onClick( inx:number): void{

    
    this.var3. splice(inx,1);
    // delete this.var3(inx);
}

// let arr = new FormArray([
//   new FormControl()
  
// ]);

// any.log(arr.value);
// arr.setValue(['abc','xyz']);
// (arr.value);




 


// // @NgModule ({
// //   imports:[FormsModule]
// // })

// // export class NgForm {
  

// // }
// user:object = { 
//   firstName: ' '};

  
   onSubmit(userName:NgForm){
    //onSubmit(userName:HTMLFormElement): void {


    console.log(userName);
    
    // console.log('Form submitted with date', userName.dirty)
    
    // console.log('Form submitted with date', userName.errors)
    
    // console.log('Form submitted with date', userName.invalid)
    
    // console.log('Form submitted with date', userName.touched)
    
    

    
  };





// }


}


