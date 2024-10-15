import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  @Input() isOpen = false;
  @Input() title = 'Turma já existe';
  @Input() message =
    'Verifique as informações digitadas ou cadastre novos dados';
  @Input() button_text = 'Entendi';
  @Output() onclose = new EventEmitter<void>();

  closeDialog() {
    this.onclose.emit();
  }
}
