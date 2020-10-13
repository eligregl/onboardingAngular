import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserManagerServiceService } from '../../services/user-manager-service.service'

@Component({
  selector: 'app-triforce',
  templateUrl: './triforce.component.html',
  styleUrls: ['./triforce.component.css']
})
export class TriforceComponent implements OnInit {
  name: string = '';
  studioimg:string ="./components/triforce/ui.png";
  constructor(
    private router: Router,
    private userManager: UserManagerServiceService,
  ) { }

  ngOnInit(): void {
    this.name = this.userManager.getUser();
  }

}
