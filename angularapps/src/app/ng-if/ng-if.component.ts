import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'http://www.thewowstyle.com/wp-content/uploads/2015/01/nature.jpg',
      content: 'I swa this tree'
    },
    {
      title: 'Bambu Tree',
      imageUrl: 'http://www.thewowstyle.com/wp-content/uploads/2015/01/nature.jpg',
      content: 'I swa this tree'
    },
    {
      title: 'Mangio Tree',
      imageUrl: 'http://www.thewowstyle.com/wp-content/uploads/2015/01/nature.jpg',
      content: 'I swa this tree'
    },
    {
      title: 'Pam Tree',
      content: 'I swa this tree'
    }
  ]

  showme: boolean = true;

  cricketerInfo=[
    { name:"Sachin Tendulakar",match:664,runs:34357,highestScore:248,country:"India"},
    { name:"Kumar Sangakkara",match:594,country:"sri-lanka"},
    { name:"Rikky Ponting",match:560,runs:27483,highestScore:257,country:"Australiya"},
    { name:"Sarfaraj Khan",runs:24948,country:"India"},
    { name:"Virat Kohli",match:547,runs:24948,highestScore:254,country:"India"},
    { name:"AB de Villiers",match:420,runs:20014,highestScore:278,country:"South Africa"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
