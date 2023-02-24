import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { Song } from '../models/songInfo';
import { Student } from '../models/student';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  title: string="Top 3 Bollywood Movies";

  movies:Movie[]=[
    {title:'3 Idiots',director:'Rajkumar',cast: 'Amir Khan',releaseDate:'2009'},
    {title:'Tumbad',director:'Rahil',cast: 'Rahi',releaseDate:'2020'},
    {title:'Kantara',director:'Rishab',cast: 'Rishab',releaseDate:'2022'}
]

  titles:string='Student Information'
student:Student[]=[
  {name:"Vinayak Koli",clgName: "Sangola College Sangola",branch: "BCS",mark:67},
  {name:"Shoeb Tamboli",clgName: "Sangola College Sangola",branch: "BCS",mark:66},
  {name:"Arman Tamboli",clgName: "D.Y.Patil Kolhapur",branch: "Bsc-(Nursing)",mark:72},
  {name:"Siddharam mhetre",clgName: "Aurveda Campus",branch: "B.A.M.S",mark:64},
  {name:"Bhimashankar Gode",clgName: "Sangola College Sangola",branch: "MSC",mark:70}
]

movieSong:string="<---:Movies Song:--->"

song:Song[]=[
  {songName:"Blue Eyes",singerName:"YO YO Honey Singh",lyrics:"YO YO Honey Singh",duration:4.56},
  {songName:"Yaad Lagaly",singerName:"Ajay-Atul",lyrics:"Ajay-Atul",duration:5.34},
  {songName:"Mujhase JO Najare",singerName:"Arjit Singh",lyrics:"Jeet Gaunguly",duration:6},
  {songName:"Basti Ka Hasti",singerName:"MC Stan",lyrics:"MC Stan",duration:4},
  {songName:"Desi Kalakar",singerName:"YO YO Honey Singh",lyrics:"YO YO Honey Singh",duration:6.56},
  {songName:"Tum Hi Ho ",singerName:"Shreya Ghoshal",lyrics:"Mohit Chouhan",duration:3},
]


  constructor() { }

  ngOnInit() {
  }

}
