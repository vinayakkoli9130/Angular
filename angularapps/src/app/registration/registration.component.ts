import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
 password1;
 password2;
 
  registerForm: FormGroup;
  submitted: boolean = false;
 
  isEmailValid:boolean;
 
  isSubmitted: boolean = true;
  formData  = {
    name:'',
    lastname:'',
    age:'',
    email: '',
    phone:'',
    city:'',
    gender: ''
  }

  defaultValue = 'Angular';
  
  defaultGender = 'Male';
  citys: string[] = [ 'Mumbai', 'Kolkata', 'Delhi'];
  genders = [ 
    {
      id: '1', value: 'Male'
    },
    {
      id: '2', value: 'Female'
    }
  ]
  emails='';
  
  constructor() { 
  
  }
  ngOnInit(): void {
    
  }

  
  

  login(form: NgForm) {
    this.isSubmitted = true;
console.log(form);
this.formData.email = form.value.name;
this.formData.email = form.value.lastname;
 this.formData.email = form.value.email;
//  this.formData.password = form.value.password;
//  this.formData.course = form.value.city;
 this.formData.gender = form.value.gender;
//form.reset();

form.controls['course'].setValue('Mumbai');
form.controls['gender'].patchValue('Male');

// POST api/ Save user(formData);

  }
  checkemail(email){
    console.log(email.value);

    const domain = email.value.substring(email.value.lastIndexOf('@') + 1); // gmail.com
   
    if(domain.toLowerCase() === 'codemindtechnology.com') 
    {
      this.isEmailValid = false;
    } else {
      this.isEmailValid = true;
    }
  }


}











 



