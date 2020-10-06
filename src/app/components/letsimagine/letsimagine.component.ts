import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserManagerServiceService } from '../../services/user-manager-service.service'

@Component({
  selector: 'app-letsimagine',
  templateUrl: './letsimagine.component.html',
  styleUrls: ['./letsimagine.component.css']
})
export class LetsimagineComponent implements OnInit {
  name: string = '';
  constructor(
    private router: Router,
    private userManager: UserManagerServiceService,
  ) { }

  ngOnInit(): void {
    this.name = this.userManager.getUser();
  }
}
