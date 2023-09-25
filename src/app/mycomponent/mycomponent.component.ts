import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
//   template :`
//   Favorite Color : <input type = "text" [formControl] = "favoriteColorControl">
//   `
//   // styleUrls: ['./mycomponent.component.css']
 })
export class MycomponentComponent {
  favoriteColorControl = new FormControl('');

}
