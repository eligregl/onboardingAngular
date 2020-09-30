import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'So excited to have you on board!'
  imageUrl: string;
  username: string;
  @Output() nameSubmit: EventEmitter<string> = new EventEmitter<string>();
  
  onClick(name: string) {
    this.nameSubmit.emit(name);
  }
}
