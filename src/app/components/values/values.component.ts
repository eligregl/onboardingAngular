import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.css']
})
export class ValuesComponent implements OnInit {
  @Input() h1: string = 'Career paths';
  @Input() imageUrl: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
