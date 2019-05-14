import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsTable } from '../table';

describe('Table', () => {
  let component: OsTable;
  let fixture: ComponentFixture<OsTable>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OsTable ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
