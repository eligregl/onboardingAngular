import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-letsimagine',
  templateUrl: './letsimagine.component.html',
  styleUrls: ['./letsimagine.component.css']
})
export class LetsimagineComponent implements OnInit {
  name: string = '';
  constructor(
    private activatedRoute: ActivatedRoute
  ) { 
    this.name = this.activatedRoute.snapshot.paramMap.get('name')
    console.log(this.name)
  }

  ngOnInit(): void {

  }

}
