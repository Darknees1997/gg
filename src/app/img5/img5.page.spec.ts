import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Img5Page } from './img5.page';

describe('Img5Page', () => {
  let component: Img5Page;
  let fixture: ComponentFixture<Img5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Img5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Img5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
