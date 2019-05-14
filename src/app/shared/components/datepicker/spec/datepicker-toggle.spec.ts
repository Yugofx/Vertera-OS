import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsDatepickerToggle } from '../datepicker-toggle';

describe('DatepickerToggleComponent', () => {
  let component: OsDatepickerToggle;
  let fixture: ComponentFixture<OsDatepickerToggle>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsDatepickerToggle ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsDatepickerToggle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
