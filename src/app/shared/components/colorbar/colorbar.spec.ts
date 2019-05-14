import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsColorbar } from './colorbar';

describe('ColorbarComponent', () => {
  let component: OsColorbar;
  let fixture: ComponentFixture<OsColorbar>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsColorbar ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsColorbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
