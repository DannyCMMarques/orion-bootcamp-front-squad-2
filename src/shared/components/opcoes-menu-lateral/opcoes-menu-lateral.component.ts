import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { mocksMenuAdministrador } from 'src/utils/mocks/mocksMenuAdministrador';

@Component({
  selector: 'app-opcoes-menu-lateral',
  templateUrl: './opcoes-menu-lateral.component.html',
  styleUrls: ['./opcoes-menu-lateral.component.scss'],
})
export class OpcoesMenuLateralComponent {
  public mocks = mocksMenuAdministrador;
  constructor(private router: Router) {}

  public redirectPages(page: string) {
    this.router.navigate([page]);
  }
}
