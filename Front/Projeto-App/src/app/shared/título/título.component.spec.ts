/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TítuloComponent } from './título.component';

describe('TítuloComponent', () => {
  let component: TítuloComponent;
  let fixture: ComponentFixture<TítuloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TítuloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TítuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
