import { Component } from '@angular/core';
import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Pam Tree',
      content: 'I love this tree'
    },
    {
      title: 'Mango Tree',
      content: 'I love this tree'
    }
  ];
  sentance:string="Jay JAvan Jay Kisan";

parentToChild: string = "I am coming from parent ";
title = 'angularapp';
name='Vinayak'
empCount;
data = {
name: 'Codmind',
dept: 'Angular',
}
getFullYears(){
return Date()
}

constructor(){
this.getValueFromSource()
}

getValueFromSource(){
this.empCount=10000;
}
onParent({ val }: { val: Employee; }) {
console.log('from child to parent emp', val);
}
test(){
alert('event raised')
}
}


