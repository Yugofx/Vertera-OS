import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsButton } from './button';

describe('ButtonComponent', () => {
	let component: OsButton;
	let fixture: ComponentFixture<OsButton>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [OsButton],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(OsButton);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
