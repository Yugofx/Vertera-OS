import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsMeter } from '../meter';

describe('PasswordValidator', () => {
  let component: OsMeter;
  let fixture: ComponentFixture<OsMeter>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OsMeter]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsMeter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
