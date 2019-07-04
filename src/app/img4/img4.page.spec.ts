import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Img4Page } from './img4.page';

describe('Img4Page', () => {
  let component: Img4Page;
  let fixture: ComponentFixture<Img4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Img4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Img4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
