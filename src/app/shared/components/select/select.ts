import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input, OnChanges,
  OnDestroy,
  Output,
  QueryList, SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { defer, merge, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ClickOutsideDirective } from 'ng-click-outside';

export const INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => OsSelect),
  multi: true,
};

@Component({
  selector: 'os-option',
  template: `{{viewOption}}`,
  host: {
    class: 'form-select-option',
    '[class.selected]': 'selected',
    '(click)': 'onClick(value)',
  },
  styleUrls: ['./select.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OsOption implements OnDestroy {
  @Input() value: string;
  @Input() viewOption: string;
  @Input() selected: boolean;
  public onSelectChange = new Subject<any>();

  ngOnDestroy() {
    this.onSelectChange.complete();
  }

  onClick(value: string) {
    this.onSelectChange.next(value);
  }
}

@Directive({
  selector: 'os-select[full-width]',
  host: {
    '[class.-full-width]': 'true',
  },
})
export class FullWidthOsSelect {}

@Component({
  selector: 'os-select',
  templateUrl: './select.html',
  styleUrls: ['./select.scss'],
  providers: [INPUT_CONTROL_VALUE_ACCESSOR],
  host: { '[class.-disabled]': 'disabled' },
})
export class OsSelect implements AfterContentInit, AfterViewInit, OnChanges, OnDestroy, ControlValueAccessor {
  @Input() placeholder = 'Выберите...';
  displayedOption = this.placeholder;

  @ContentChildren(OsOption, { descendants: true }) options: QueryList<OsOption>;
  @ViewChild(ClickOutsideDirective, { read: ElementRef }) panelRef: ElementRef;
  @Input() disabled: boolean;
  private _value: any;
  @Input()
  get value() {
    return this._value;
  }
  set value(newValue: string) {
    if (newValue !== this._value) {
      this.checkOptionValidity(newValue);
      this.writeValue(newValue);
      this._value = newValue;
    }
  }
  @Output() valueChange = new EventEmitter<string>();
  @Output() openChange = new EventEmitter();
  @Output() closeChange = new EventEmitter();
  optionSelectionChanges: Observable<any> = this.createOptionChangesObservable();
  public isPanelOpened: boolean;
  panelHeight: number;
  private readonly destroy = new Subject();
  private onChange = _ => null;
  private onTouch = () => null;
  
  ngOnChanges(changes: SimpleChanges) {
    if (changes.placeholder && changes.placeholder.firstChange) {
      this.displayedOption = changes.placeholder.currentValue;
    }
  }

  ngAfterViewInit() {
    this.updatePanelHeight();
    this.options.changes.subscribe(() => {
      this.updatePanelHeight();
      this.optionSelectionChanges = this.createOptionChangesObservable();
      this.initialize();
    });
  }

  ngAfterContentInit() {
    this.initialize();
  }

  updatePanelHeight() {
    this.panelHeight = Array.from(this.panelRef.nativeElement.children).reduce((acc, child: any) => acc + child.offsetHeight, 0);
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }

  private initialize() {
    this.initializeValue();
    this.optionSelectionChanges.pipe(takeUntil(this.destroy)).subscribe(value => {
      this.value = value;
      this.markSelectedOption(value);
      this.close();
    });
  }

  private createOptionChangesObservable() {
    return defer(() => {
      return merge(...this.options.map(option => option.onSelectChange));
    });
  }

  writeValue(newValue: any): void {
    if (this.options) {
      this.valueChange.emit(newValue);
      this.onChange(newValue);
      const selected = this.options.find(opt => opt.value === newValue);
      this.displayedOption = selected ? selected.viewOption : this.placeholder;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled && this.isPanelOpened) {
      this.close();
    }
    this.disabled = isDisabled;
  }

  toggle() {
    this.isPanelOpened ? this.close() : this.open();
  }

  open() {
    if (this.disabled || !this.options.length || this.isPanelOpened) {
      return;
    }
    this.openChange.emit();
    this.isPanelOpened = true;
  }

  close() {
    if (this.isPanelOpened) {
      this.closeChange.emit();
      this.isPanelOpened = false;
      this.onTouch();
    }
  }

  onClickOutside(event) {
    if (!this.isPanelOpened) {
      return;
    }
    const selectBox = event.target.closest('.form-select-box');
    if (selectBox && selectBox.parentNode === this.panelRef.nativeElement.parentNode) {
      return;
    }
    this.close();
  }

  private initializeValue() {
    if (this.options) {
      if (this.value) {
        this.checkOptionValidity(this.value);
        this.writeValue(this.value);
        // TODO: handle after view init check error
        // this.markSelectedOption(this.value);
        setTimeout(() => this.markSelectedOption(this.value));
        return;
      }
      const selected = this.options.filter(opt => opt.selected);
      if (selected.length) {
        if (selected.length > 1) {
          console.warn('Select component does not support multiselect. Fallback to first selected option');
          selected.forEach((opt, idx) => {
            opt.selected = !idx;
          });
        }
        this.value = selected[0].value;
      }
    }
  }

  private markSelectedOption(value: string) {
    const previousOption = this.options.find(opt => opt.selected);
    const newOption = this.options.find(opt => opt.value === value);
    if (previousOption) {
      previousOption.selected = false;
    }
    if (newOption) {
      newOption.selected = true;
    }
  }

  private checkOptionValidity(option: string) {
    if (this.options && !this.options.find(opt => opt.value === option)) {
      console.warn(`A value of "${option}" not found in options list`);
      this.displayedOption = this.placeholder;
    }
  }
}
