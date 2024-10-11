import { Component } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  isFocused = false;
  selectedValue = '';
  showError = false; // Assuming you might handle an error condition dynamically
  options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];

  onFocus() {
    this.isFocused = true;
  }

  onBlur() {
    this.isFocused = false;
  }

  onSelectChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedValue = target.value;

    // If you want to trigger error based on value, you can add logic here
    if (this.selectedValue === '') {
      this.showError = true;
    } else {
      this.showError = false;
    }
  }
}
