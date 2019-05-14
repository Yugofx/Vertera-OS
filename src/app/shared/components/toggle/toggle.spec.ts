import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsToggle } from './toggle';

describe('Toggle', () => {
  let component: OsToggle;
  let fixture: ComponentFixture<OsToggle>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsToggle ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsToggle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
