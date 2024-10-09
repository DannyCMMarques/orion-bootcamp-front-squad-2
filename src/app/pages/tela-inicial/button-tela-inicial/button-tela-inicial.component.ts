import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-tela-inicial',
  templateUrl: './button-tela-inicial.component.html',
  styleUrls: ['./button-tela-inicial.component.scss'],
})
export class ButtonTelaInicialComponent {
  @Input() texto: string = 'btn';
  @Input() rota: string = '/';

  constructor(private router: Router) {}

  navegar() {
    this.router.navigate([this.rota]);
  }
}
