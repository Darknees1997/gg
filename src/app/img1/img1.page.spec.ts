import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Img1Page } from './img1.page';

describe('Img1Page', () => {
  let component: Img1Page;
  let fixture: ComponentFixture<Img1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Img1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Img1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
