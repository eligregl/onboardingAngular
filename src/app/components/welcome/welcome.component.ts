import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserManagerServiceService } from '../../services/user-manager-service.service';

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
    private router: Router,
    private userManager: UserManagerServiceService, 
  ) { }

  ngOnInit(): void {
  }

  onClick() {
    this.userManager.saveUser(this.username);
    this.router.navigate([
      '/imagine'
    ])
  }

}
