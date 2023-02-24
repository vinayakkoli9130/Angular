import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-countrystatedro',
  templateUrl: './countrystatedro.component.html',
  styleUrls: ['./countrystatedro.component.css']
})
export class CountrystatedroComponent implements OnInit {
 
  
  countries=[
    {id:"1",name:"India"},
    {id:"2",name:"America"},
    {id:"3",name:"Australia"}
  ]
  arrState:Array<any>=[
    {id:"s1", parsenId:"2",name: "California"  },
    {id:"s2", parsenId:"2",name: "Martland"  },
    {id:"s3", parsenId:"1",name: "Maharashtra"  },
    {id:"s5", parsenId:"1",name: "Karanataka"  },
    {id:"s6", parsenId:"2",name: "Nebraska"  },
    {id:"s7", parsenId:"1",name: "Delhi"  },
    {id:"s8", parsenId:"2",name: "Ohio"  },
    {id:"s9", parsenId:"3",name: "Victoria"  },
    {id:"s10", parsenId:"3",name: "New South Wales"  },
    {id:"s11", parsenId:"3",name: "South Australia"  },
  ]

  states:Array<any>;

  constructor() { }

  ngOnInit() {
  }
  onCountrySelect(val:any){
this.states=this.arrState.filter(c=>c.parsenId==val.target.value)
  }
playersName:Array<any>
  country:any[]=[
    {id:'1',name:'Austrelia' },
    {id:'2',name:'India'},
    {id:'3', name:'Pakistan'},
    {id:'4',name:'England'}
 
]
player=[
  {id:'p1', parsenId:'3',name:'Babar Aajam'},
  {id:'p2', parsenId:'2',name:'Virat Kohli'},
  {id:'p3', parsenId:'4',name:'Jos The Boss'},
  {id:'p4', parsenId:'1',name:'Aron Finch'},
  {id:'p5', parsenId:'2',name:'Mahendra Singh Dhoni'},
  {id:'p6', parsenId:'3',name:'Shaen Afridi'},
  {id:'p7', parsenId:'4',name:'Moen Ali'},
  {id:'p8', parsenId:'1',name:'Del Sten'},
  {id:'p9', parsenId:'2',name:'M.Shami'}
]
onClick(val:any){
  this.playersName=this.player.filter(p=>p.parsenId==val.target.value)
}
}



//------------Assignment-----------------
//   pVisible = true;
//   toggleMessages = [];

//  addToggleMessage() {
//     this.pVisible = !this.pVisible;
//     const toggleMessage = this.pVisible ?
//     " From Solapur"  :'I Am Vinayak Koli'
                                                         
//     this.toggleMessages.push(toggleMessage);
//   }

// }
