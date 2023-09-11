/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CarrelloComponent } from './carrello.component';

describe('CarrelloComponent', () => {
  let component: CarrelloComponent;
  let fixture: ComponentFixture<CarrelloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrelloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
