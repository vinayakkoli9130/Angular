import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
// export class CardComponent implements OnInit {
//   posts = [
//     {
//       title: 'Pam Tree',
//       content: 'I love this tree'
//     },
//     {
//       title: 'Mango Tree',
//       content: 'I love this tree'
//     }
//   ]

//   constructor() { }

//   ngOnInit() {
//     console.log(this.title);

//     console.log(this.content);
//   }

  // }
  export class CardComponent implements OnInit {
    @Input() childSentance=" ";

    @Input() title = '';
    @Input() content = '';
    constructor() { }
  
    ngOnInit() {
      console.log(this.title);
  
      console.log(this.content);
      console.log(this.childSentance);
      
    }
  
  }
  


