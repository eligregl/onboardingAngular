import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionvaluesComponent } from './accordionvalues.component';

describe('AccordionvaluesComponent', () => {
  let component: AccordionvaluesComponent;
  let fixture: ComponentFixture<AccordionvaluesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionvaluesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionvaluesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
