import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-careerpath',
  templateUrl: './careerpath.component.html',
  styleUrls: ['./careerpath.component.css']
})
export class CareerpathComponent implements OnInit {
  @Input() h1: string = 'Career paths';
  @Input() title: string = '';
  @Input() imageUrl: string = '';
  showBody = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.showBody = !this.showBody;
  }

}
