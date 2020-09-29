import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'So excited to have you on board!'
  imageUrl: string;

  // onClick(inputValue: string) {
  //   console.log(inputValue)
  // }

  onNameSubmit(name: string) {
    console.log(name);
  }
}
