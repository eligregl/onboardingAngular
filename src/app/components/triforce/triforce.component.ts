import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserManagerServiceService } from '../../services/user-manager-service.service';

@Component({
  selector: 'app-triforce',
  templateUrl: './triforce.component.html',
  styleUrls: ['./triforce.component.css']
})
export class TriforceComponent implements OnInit {
  @Input() name: string = '';
  @Input() imageUrl: string = '';
  constructor(
    private router: Router,
    private userManager: UserManagerServiceService,
  ) { }

  ngOnInit(): void {
    this.name = this.userManager.getUser();
  }

}
