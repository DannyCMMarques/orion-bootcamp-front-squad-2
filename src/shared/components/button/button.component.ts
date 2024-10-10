import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() title = ''
  @Input() buttonStyle: 'outline' | 'full' = 'full'
  @Output() clickButton = new EventEmitter


  public emitFunction() {
    this.clickButton.emit()
  }
}
