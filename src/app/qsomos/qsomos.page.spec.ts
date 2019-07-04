import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QsomosPage } from './qsomos.page';

describe('QsomosPage', () => {
  let component: QsomosPage;
  let fixture: ComponentFixture<QsomosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QsomosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QsomosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
