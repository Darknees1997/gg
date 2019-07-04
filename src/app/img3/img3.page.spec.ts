import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Img3Page } from './img3.page';

describe('Img3Page', () => {
  let component: Img3Page;
  let fixture: ComponentFixture<Img3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Img3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Img3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
