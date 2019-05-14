import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsSearchbar } from './searchbar';

describe('TypeaheadComponent', () => {
  let component: OsSearchbar;
  let fixture: ComponentFixture<OsSearchbar>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsSearchbar ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsSearchbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
