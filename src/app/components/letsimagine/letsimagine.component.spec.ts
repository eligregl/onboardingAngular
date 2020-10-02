import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetsimagineComponent } from './letsimagine.component';

describe('LetsimagineComponent', () => {
  let component: LetsimagineComponent;
  let fixture: ComponentFixture<LetsimagineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetsimagineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetsimagineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
