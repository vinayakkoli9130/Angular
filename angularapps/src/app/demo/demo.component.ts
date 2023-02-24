import { Component } from "@angular/core";

@Component({
 selector:'app-demo',
   templateUrl:'./demo.component.html',
    styleUrls:['./demo.component.css' ]
})
export class DemoComponent {
userName:string="";
constructor(){

}
value(val){
  console.log("Given String Is-:",val);
  
}
ngOnInit(){
  
}
}