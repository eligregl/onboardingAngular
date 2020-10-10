import { Component, OnInit, Input} from '@angular/core';
@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.css']
})
export class AccordionItemComponent implements OnInit {
  @Input() title: string = '';
  @Input() description: string = '';
  showBody = false;

  initial = ['Junior', 'Junior Advanced', 'Semi Senior', 'Semi Senior Advance'];
  senior = ['Senior', 'Software Designer', 'Architect'];
  expert = ['Subject Matter Expert', 'Technical Director', 'Technical Manager'];
  seniorMgmt = ['Studio Partner', 'VP Tech', 'CTO'];

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.showBody = !this.showBody;
  }

}
