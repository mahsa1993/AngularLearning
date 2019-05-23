import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
 message = 'Hello . error occured .. blah blah blah';
  constructor() { }

  ngOnInit() {
  }

}
