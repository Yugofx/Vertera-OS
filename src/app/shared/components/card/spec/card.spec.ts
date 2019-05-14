import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsCard } from '../card';

describe('CardComponent', () => {
  let component: OsCard;
  let fixture: ComponentFixture<OsCard>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OsCard]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
