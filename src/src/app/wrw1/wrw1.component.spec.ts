import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wrw1Component } from './wrw1.component';

describe('Wrw1Component', () => {
  let component: Wrw1Component;
  let fixture: ComponentFixture<Wrw1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wrw1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Wrw1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
