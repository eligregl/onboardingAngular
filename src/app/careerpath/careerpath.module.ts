import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareerpathComponent } from './careerpath.component';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';

@NgModule({
  declarations: [CareerpathComponent, AccordionItemComponent],
  imports: [
    CommonModule
  ],
  exports: [CareerpathComponent]
})
export class CareerpathModule { }
