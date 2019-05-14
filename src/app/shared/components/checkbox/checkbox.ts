import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from '@angular/forms';

export const VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => OsCheckbox),
  multi: true,
};

@Component({
  selector: 'os-checkbox',
  templateUrl: './checkbox.html',
  styleUrls: ['./checkbox.scss'],
  host: {
    class: 'os-checkbox',
    '[class.-disabled]': 'disabled',
    '[class.-toggle]': `view === 'toggle'`,
    '[id]': 'id',
  },
  providers: [VALUE_ACCESSOR],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class OsCheckbox implements OnInit, ControlValueAccessor {
  @Input() id = '';
  @Input() required: boolean;
  @Input() name = '';
  @Input() value = '';
  @Input() labelPosition: 'before' | 'after' = 'after';

  onChange = _ => {};
  onTouch = () => {};

  @ViewChild('input') inputElementRef: ElementRef;
  @Output() change = new EventEmitter();

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  private _disabled = false;
  @Input()
  get disabled() {
    return this._disabled;
  }

  set disabled(value) {
    if (this.disabled !== value) {
      this._disabled = value;
      this.changeDetectorRef.markForCheck();
    }
  }

  private _checked = false;
  @Input()
  get checked(): boolean {
    return this._checked;
  }

  set checked(value: boolean) {
    if (value !== this.checked) {
      this._checked = value;
      this.changeDetectorRef.markForCheck();
    }
  }

  ngOnInit() {
  }

  writeValue(value: any): void {
    this.checked = !!value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  toggle() {
    this.checked = !this.checked;
  }

  onInputClick(event: Event) {
    event.stopPropagation();

    if (!this.disabled) {
      this.toggle();
      this.emitChangeEvent();
    }
  }

  onInteractionEvent(event: Event) {
    event.stopPropagation();
  }

  private emitChangeEvent() {
    this.onChange(this.checked);
    this.change.emit(this.checked);
  }

}
