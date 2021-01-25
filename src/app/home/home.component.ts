import { Component, OnInit } from '@angular/core';
import { Home } from './home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // name:string = "Stack Query App"

  pers:Home[]= [];
  constructor() { 
  }

  ngOnInit(): void {
    this.pers.push(new Home(1,"tej",12))
    this.pers.push(new Home(1,"tej",12))
    this.pers.push(new Home(1,"tej",12))
    this.pers.push(new Home(1,"tej",12))
  
  }

}
