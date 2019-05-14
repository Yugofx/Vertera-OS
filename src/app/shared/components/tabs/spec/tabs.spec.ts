import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsTabs } from '../tabs';

describe('Tabs', () => {
  let component: OsTabs;
  let fixture: ComponentFixture<OsTabs>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OsTabs ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsTabs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
