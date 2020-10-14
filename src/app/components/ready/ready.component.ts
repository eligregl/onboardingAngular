import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ready',
  templateUrl: './ready.component.html',
  styleUrls: ['./ready.component.css']
})
export class ReadyComponent implements OnInit {
  image: string;

  constructor() { }

  ngOnInit(): void {
  }

}
