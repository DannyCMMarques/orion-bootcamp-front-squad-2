import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content-tela',
  templateUrl: './content-tela.component.html',
  styleUrls: ['./content-tela.component.scss'],
})
export class ContentTelaComponent {
  txtBtnProfessor: string = 'Sou Professor(a)';
  txtBtnResponsavel: string = 'Sou Responsável';

  constructor(private router: Router) {}

  navegarAdm() {
    this.router.navigate(['/login-administrador']);
  }
}
