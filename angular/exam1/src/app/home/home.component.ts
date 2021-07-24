import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public name = 'Lê BV';
  public salary = 40000;
  public city = 'Hoà bình';
  
  constructor() { }

  ngOnInit(): void {
  }

}
