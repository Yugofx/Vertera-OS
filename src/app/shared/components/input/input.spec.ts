import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsInput } from './input';

describe('InputComponent', () => {
  let component: OsInput;
  let fixture: ComponentFixture<OsInput>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OsInput ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
