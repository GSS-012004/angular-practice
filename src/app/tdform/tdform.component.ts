import { Component } from '@angular/core';
import { NgForm ,NgModel} from '@angular/forms';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.css']
})
export class TdformComponent {
  FirstName: string = "";
  LastName: string = "";
  Age:number = 0;
  Email: string = "";


  onSubmit (userName:NgForm ){
    console.log(userName);
    this.FirstName =userName.value.personDetails.fname;
    this.LastName = userName.value.personDetails.lname;
    this.Age = userName.value.Age;
    this.Email= userName.value.email;

    userName.reset();

  };

}
