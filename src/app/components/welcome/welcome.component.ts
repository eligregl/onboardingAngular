import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  title: string = 'So excited to have you on board!'
  imageUrl: string;
  username: string = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onClick() {
    console.log(this.username);
    this.router.navigate([
      '/imagine',
      this.username
    ])
  }

}
