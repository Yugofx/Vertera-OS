import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
	selector: 'button[os-button], button[os-button-raised], button[os-button-stroke]',
	templateUrl: './button.html',
	styleUrls: ['./button.scss'],
	host: {
		'[disabled]': 'disabled || null',
	},
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class OsButton implements OnInit {
	@Input() disabled: boolean;
	@Input() color: string;

	constructor(protected elRef: ElementRef) {}

	ngOnInit() {
		if (this.color) {
			this.elRef.nativeElement.classList.add('-' + this.color);
		}
	}
}

@Component({
	selector: 'a[os-button], a[os-button-raised], a[os-button-stroke]',
	templateUrl: './button.html',
	styleUrls: ['./button.scss'],
	inputs: ['disabled', 'color'],
	host: {
		'[attr.disabled]': 'disabled || null',
		'(click)': '_haltDisabledEvents($event)',
	},
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OsAnchor extends OsButton {
	constructor(protected elRef: ElementRef) {
		super(elRef);
	}

	_haltDisabledEvents(event: Event) {
		if (this.disabled) {
			event.preventDefault();
			event.stopImmediatePropagation();
		}
	}
}
