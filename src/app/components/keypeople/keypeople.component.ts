import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-keypeople',
  templateUrl: './keypeople.component.html',
  styleUrls: ['./keypeople.component.css']
})
export class KeypeopleComponent implements OnInit {
  @Input() imageUrl: string = '';
  @Input() title: string = 'UI Studio COPE';
  @Input() subtitle: string = 'Key people';
  @Input() description: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
