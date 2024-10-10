import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() title = ''
  @Input() buttonStyle: 'outline' | 'full' |'full-roxo-claro' = 'full'
  @Output() clickButton = new EventEmitter

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }

  emitirFuncao() {
    this.clickButton.emit()
  }
}
