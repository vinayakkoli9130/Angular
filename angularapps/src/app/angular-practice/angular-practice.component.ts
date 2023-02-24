import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-angular-practice',
  templateUrl: './angular-practice.component.html',
  styleUrls: ['./angular-practice.component.css']
})
export class AngularPracticeComponent implements OnInit {
  myNewReactiveForm:FormGroup
  myReactiveForm:FormGroup
 
  isSubmitted:boolean=false
  constructor() { this.createForm()}

  ngOnInit() {
    console.log(this.myReactiveForm.value);
    this.createNewForm()
  }
  createForm(){
    this.myReactiveForm=new FormGroup({
      // 'userName':new FormGroup({
   'name': new FormControl('Vinayak'),
   'lastName':new FormControl('Koli'),
   'email': new  FormControl('abc@gmail.com') ,
  // }),
  'cource':new FormControl(null)
    })
  }
  OnSubmit(){
    this.isSubmitted=true
    alert("Method is Called")
    console.log("Given Value-:",this.myReactiveForm.value);
    
  }

  createNewForm(){
this.myNewReactiveForm=new FormGroup({
'fName':new FormControl(null),
'mobileNumber':new FormControl(null),
'email':new FormControl(null),
'gender':new FormControl(null),
})
}
onInit(){
  console.log(this.myNewReactiveForm.value);
  
}
  
}
