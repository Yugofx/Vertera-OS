import {
  Directive,
  ElementRef,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  Self
} from '@angular/core';
import { OS_INPUT_VALUE_ACCESSOR } from './input-value-accessor';
import { Subject } from 'rxjs';

const INVALID_TYPES = [
  'button',
  'checkbox',
  'file',
  'hidden',
  'image',
  'radio',
  'range',
  'reset',
  'submit',
  'date',
  'datetime',
  'datetime-local',
  'month',
  'time',
  'week',
];

@Directive({
  selector: `input[os-input], textarea[os-input]`,
  host: {
    class: 'form-control',
    '[attr.id]': 'id',
    '[attr.placeholder]': 'placeholder',
    '[attr.readonly]': 'readonly || null',
    '[disabled]': 'disabled',
    '(blur)': 'focusChanged(false)',
    '(focus)': 'focusChanged(true)',
    '(input)': 'onInput()',
  },
})
export class OsInput implements OnInit, OnChanges, OnDestroy {
  @Input() disabled = false;
  @Input() placeholder: string;
  @Input() id: string;
  @Input() readonly = false;
  public stateChanges = new Subject();
  private valueAccessor: { value: any };
  private focused = false;

  constructor(private elementRef: ElementRef,
              @Optional() @Self() @Inject(OS_INPUT_VALUE_ACCESSOR) inputValueAccessor: any) {
    this.valueAccessor = inputValueAccessor || elementRef.nativeElement;
  }

  protected _type = 'text';

  @Input()
  get type() {
    return this._type;
  }

  set type(type: string) {
    this._type = type || 'text';
    this.validateType();
    if (!this.isTextarea()) {
      (this.elementRef.nativeElement as HTMLInputElement).type = this._type;
    }
  }

  @Input()
  get value() {
    return this.valueAccessor.value;
  }

  set value(newValue: any) {
    if (this.value !== newValue) {
      this.valueAccessor.value = newValue;
      this.stateChanges.next();
    }
  }

  private get controlType(): string {
    return this.elementRef.nativeElement.nodeName.toLowerCase();
  }

  ngOnInit() {

  }

  ngOnChanges() {
    this.stateChanges.next();
  }

  ngOnDestroy() {
    this.stateChanges.complete();
  }

  onInput() {

  }

  public focus() {
    this.elementRef.nativeElement.focus();
  }

  private validateType(): void {
    if (INVALID_TYPES.includes(this.type)) {
      throw new Error(`You try to set incompatible type "${this.type}" to [wor-input] directive`);
    }
  }

  private isTextarea(): boolean {
    return this.controlType === 'textarea';
  }

  private focusChanged(isFocused: boolean) {
    if (isFocused !== this.focused && !this.readonly) {
      this.focused = isFocused;
      this.stateChanges.next();
    }
  }
}
