import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareerpathComponent } from './careerpath.component';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';
import { RouterModule} from '@angular/router';

@NgModule({
  declarations: [CareerpathComponent, AccordionItemComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [CareerpathComponent]
})
export class CareerpathModule { }
