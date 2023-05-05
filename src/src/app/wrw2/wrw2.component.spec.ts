import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wrw2Component } from './wrw2.component';

describe('Wrw2Component', () => {
  let component: Wrw2Component;
  let fixture: ComponentFixture<Wrw2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wrw2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Wrw2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
