import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee,Personal } from '../models/employee';


@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  @Input() child : string; // []
count:number=0
firstName :string = 'Rocky';//Two Way Databinding


@Output() fromChild : EventEmitter<string> = new EventEmitter<string>(); // (fromChild)
@Output() objFromChild :EventEmitter<Employee>= new EventEmitter<Employee>();
@Output() infoFromChild:EventEmitter<Personal>= new EventEmitter<Personal>();
lastname: string = 'Bhai';
 
employee:Employee;
 
personal:Personal


constructor() { }



  ngOnInit() {
console.log(this.child);
  }
onButtonClick(){
  console.log("Button Was clicked");
  let counts=this.count+=1;
  console.log(counts);
  
}
onKeyUp(value: { target: { value: any; }; }) {
  console.log('$event', value.target.value)
}
sendToParent() {
  // this.objFromChild.emit(this.fromChild);
  this.employee=new Employee()
  this.employee.name="Vinayak Koli";
  this.employee.salary=40000;
  this.objFromChild.emit(this.employee)//(objFromChil)
}
sendsToParent(){
  this.personal=new Personal;
  this.personal.name="Vinayak";
  this.personal.age=23;
  this.personal.eduction="Mcs-:(cs)"
  this.personal.isMaried=false;
  this.infoFromChild.emit(this.personal)
}
}


