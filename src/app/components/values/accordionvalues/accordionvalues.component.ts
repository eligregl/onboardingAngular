import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordionvalues',
  templateUrl: './accordionvalues.component.html',
  styleUrls: ['./accordionvalues.component.css']
})
export class AccordionvaluesComponent implements OnInit {
  @Input() title: string = '';
  showBody = false;
  
  excellent = ['Focused', 'Commited'];
  act = ['Integrity'];
  constantly = ['Fast learner', 'Clear thinker', 'Innovative'];
  fun = ['Flexible', 'Colaborative', 'Inclusive'];
  team = ['Flexible', 'Colaborative', 'Inclusive'];
  think = ['Fast learner', 'Clear thinker'];

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.showBody = !this.showBody;
  }

}
