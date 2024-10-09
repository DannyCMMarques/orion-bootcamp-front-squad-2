import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFieldComponent),
      multi: true,
    },
  ],
})
export class InputFieldComponent {
  @Input() placeholder = '';
  @Input() label = 'Label';
  @Input() type: 'email' | 'password' | 'text' | 'number' = 'text';
  @Input() showError = false;

  value = '';
  isFocused = false;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange = (value: any) => { };
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched = () => { };

  writeValue(value: any): void {
    this.value = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setDisabledState?(isDisabled: boolean): void { }

  onInput(event: any): void {
    this.value = event.target.value;
    this.onChange(this.value);
  }

  onFocus(): void {
    this.isFocused = true;
  }

  onBlur(): void {
    this.isFocused = false;
    this.onTouched();
  }
}
