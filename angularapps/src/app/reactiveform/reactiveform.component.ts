import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  isSubmitted: boolean = false;
  myReactiveForm: FormGroup;
  constructor() { 
    this.createForm();
  }

  ngOnInit() {
   console.log(this.myReactiveForm.value);
    
  }


  createForm()
  {
    this.myReactiveForm = new FormGroup({
      'userDetails': new FormGroup({
        'username' : new FormControl('Vinayak'),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'course': new FormControl(null)
    });
  }

  OnSubmit() {
    this.isSubmitted = true;
    alert('method called');
    console.log('My ReactiveForm', this.myReactiveForm.value)
  }
}
//  myReactiveForm:FormGroup
//   constructor() { }

//   ngOnInit() {
//     this.OnSubmit
//   }
// createForm()
// {
//   this.myReactiveForm=new FormGroup({
// 'username': new FormControl("Codemind"),
// 'email': new FormControl("codemindtechnology.com"),
// 'course': new FormControl("Angular")

//   })
// }
// OnSubmit(){
//   alert("Method Called");
//   console.log(this.myReactiveForm.value);
  
// }
// }
