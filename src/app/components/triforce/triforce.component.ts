import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserManagerServiceService } from '../../services/user-manager-service.service'

@Component({
  selector: 'app-triforce',
  templateUrl: './triforce.component.html',
  styleUrls: ['./triforce.component.css']
})
export class TriforceComponent implements OnInit {
  //isExpertise: boolean= true
  name: string = '';
  imageSource: string = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=640:*';
  constructor(
    private router: Router,
    private userManager: UserManagerServiceService,
  ) { }

  ngOnInit(): void {
    this.name = this.userManager.getUser();
  }

}
