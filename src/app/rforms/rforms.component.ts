import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup,Validators ,FormBuilder, ValidationErrors} from '@angular/forms';



@Component({
  selector: 'app-rforms',
  templateUrl: './rforms.component.html',
  styleUrls: ['./rforms.component.css']
})
export class RformsComponent implements OnInit
 {
      tital = 'ReactiveForms';
      reactiveForm!: FormGroup;
      skills!:FormArray;
  // formArray=FormArray
  //  constructor( private fb: FormBuilder){ }

  ngOnInit()  
   {
      this.reactiveForm = new FormGroup 
      ({
          personDetails : new FormGroup
            ({
              firstname : new FormControl( null,Validators.required),
              lastname : new FormControl( null,[ Validators.required,this.nospaceallowed]),
            }),
          Age : new FormControl(19),
          email : new FormControl( null,[Validators.required]),
          skills : new FormArray
            ([
              new FormControl(null,Validators.required),
            ])
       

       })


       this.skills=this.reactiveForm.get('skills') as FormArray;
      

      //  console.log( 'reactiveform is submited' ,this.reactiveForm);
  }


       onSubmit()
       {
        console.log( 'reactiveform is submited' ,this.reactiveForm);
console.log(Object);
          // this.reactiveForm.reset();
        }


      addelement()
      {
       ((<FormArray> this.reactiveForm.get('skills')).push( new FormControl(null,Validators.required)))
      }

      // this.reactiveForm = this.fb.FormGroup({
      //   skills : this.fb.array([]),
      // });

      // addSkill() {
      //   const skillControl = new FormControl('');
      //   (this.reactiveForm.get('skills') as FormArray).push(skillControl);
      // }
      
      // removeSkill(index: number) {
      //   (this.reactiveForm.get('skills') as FormArray).removeAt(index);
      // }

      onClick(i:number): void{

    
        // this.skills. splice(skill,1);
        //  FormArray.removeAt(skill)

         (this.reactiveForm.get('skills') as FormArray).removeAt(i);
    }

    nospaceallowed(control:FormControl): ValidationErrors | null{
      if ( control.value != null && control.value.indexOf('') != -1)
      {
        return {nospaceallowed:true}
      }
      
        return null;
      
    };
      
    
}