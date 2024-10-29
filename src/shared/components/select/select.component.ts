import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() showError = false;
  @Input() data: Array<{ value: string; label: string }> = [];
  @Input() multiple = false;

  public value: string | string[] = this.multiple ? [] : '';
  public selectedValues: string[] = []; // Array para valores selecionados quando múltiplo
  public isDropdownOpen = false;
  public isFocused = false;

  private onChange: (value: string | string[]) => void = () => {};
  private onTouched: () => void = () => {};

  // Função para retornar os rótulos das opções selecionadas (útil para exibir o texto no dropdown customizado)
  get selectedLabels(): string[] {
    return this.data
      .filter(option => this.selectedValues.includes(option.value))
      .map(option => option.label);
  }

  public writeValue(value: string | string[]): void {
    if (this.multiple) {
      this.selectedValues = Array.isArray(value) ? value : [value];
    } else {
      this.value = value as string;
    }
  }

  public registerOnChange(fn: (value: string | string[]) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public onSelectChange(event: Event): void {
    const target = event.target as HTMLSelectElement;

    if (this.multiple) {
      const selectedValues = Array.from(target.selectedOptions).map(option => option.value);
      this.selectedValues = selectedValues;
      this.onChange(this.selectedValues);
    } else {
      this.value = target.value;
      this.onChange(this.value);
    }
  }

  public onCheckboxChange(value: string): void {
    if (this.selectedValues.includes(value)) {
      this.selectedValues = this.selectedValues.filter(option => option !== value);
    } else {
      this.selectedValues.push(value);
    }
    this.onChange(this.selectedValues);
  }

  public toggleDropdown(): void {
    if (this.multiple) {
      this.isDropdownOpen = !this.isDropdownOpen;
    }
  }

  public onFocus(): void {
    this.isFocused = true;
  }

  public onBlur(): void {
    this.isFocused = false;
    this.onTouched();
  }

  public isSelected(value: string): boolean {
    return this.selectedValues.includes(value);
  }
}
