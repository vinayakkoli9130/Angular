import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {
 
  selectedProduct: any;
  cricketerWife:string;
  courses:any[]=[
    {id:1,
    desc:'Angular Core Deep Dive',
    iconURL:"https://www.shutterstock.com/image-vector/angular-emblem-white-letter-on-260nw-1527054845.jpg",
    category:"INTERMEDIATE"
    },
    {id:2,
      desc:'Javascript Zero To Hero',
      iconURL:"https://blog.logrocket.com/wp-content/uploads/2022/09/working-javascript-reflect-api-nocdn.png",
      category:"BEGINEAR"
      },
      {id:3,
        desc:'Typescript',
        iconURL:"https://cdn.thenewstack.io/media/2022/01/10b88c68-typescript-logo.png",
        category:"ADVANCE"
        },
        {id:4,
          desc:'HTML',
          iconURL:"https://www.ionos.com/digitalguide/fileadmin/DigitalGuide/Teaser/html-tagst.jpg",
         
          }
  
]

  

  constructor() { }

  ngOnInit() {

  }
  getProductValue(val) {
    console.log('seleced value from dropdown-:', val.target.value);
    // let selectedValue = val.target.value;
    this.selectedProduct = val.target.value;
  }
  wifeName(vals){
    console.log('select value from dropdownt-:',vals.target.value);
  //  let wifes= vals.target.value
    this.cricketerWife=vals.target.value
  }

}
