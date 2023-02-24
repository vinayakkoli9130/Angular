// import { Component, OnInit } from '@angular/core';
// import {  FormControl, FormGroup } from '@angular/forms';
// @Component({
//   selector: 'app-assign-reactive-form',
//   templateUrl: './assign-reactive-form.component.html',
//   styleUrls: ['./assign-reactive-form.component.css']
// })
// export class AssignReactiveFormComponent implements OnInit {
// isReactiveForm:FormGroup
// default:any="Advance"  
//   constructor( ) { }
//   ngOnInit() {
//     this.onClick()   
//   }
//   onClick(){
//     this.isReactiveForm=new FormGroup({
//       'email':new FormControl(null),
//       'subscriptions':new FormControl("Advance"),
//       'password':new FormControl(null),
//       'date':new FormControl(null)
//     })
//   }
//   OnSubmit(){
//     console.log(this.isReactiveForm.value);  
//   }
 
// }

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-assign-reactive-form',
  templateUrl: './assign-reactive-form.component.html',
  styleUrls: ['./assign-reactive-form.component.css']
})
export class AssignReactiveFormComponent implements OnInit {
  myReactiveForm : FormGroup;
  submitted:boolean = false;
  subscriptions = ["Basic", "Advanced", "Pro"];
  defaultValue:string = "Advanced";
  constructor() {
    this.createForm();
   ;
   }
  ngOnInit() {
  //   this.submitted=true;
  //   alert("Method Is Called")
  //  console.log( this.myReactiveForm.value);
   }

  createForm()
  {
    this.myReactiveForm = new FormGroup({
      'email': new FormControl(null, [Validators.required,Validators.email]),
      'subscript' : new FormControl('Advanced'),
      'password' : new FormControl(null, [Validators.required]),
      'date' : new FormControl(null, [Validators.required])
    })
  }
  getToday(){
    return new Date().toISOString().split('T')[0]
 }
onSubmit(){
  this.submitted=true;
  alert("Method Is Called")
 console.log( this.myReactiveForm.value);
}
 
}

