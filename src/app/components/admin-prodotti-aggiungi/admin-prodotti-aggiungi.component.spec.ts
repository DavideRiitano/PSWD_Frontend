/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdminProdottiAggiungiComponent } from './admin-prodotti-aggiungi.component';

describe('AdminProdottiAggiungiComponent', () => {
  let component: AdminProdottiAggiungiComponent;
  let fixture: ComponentFixture<AdminProdottiAggiungiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProdottiAggiungiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProdottiAggiungiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
