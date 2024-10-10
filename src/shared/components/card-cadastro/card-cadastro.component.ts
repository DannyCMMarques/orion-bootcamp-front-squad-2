import { Component } from '@angular/core';
import { mockCadastro } from 'src/utils/mocks/mocksCadrastro';

@Component({
  selector: 'app-card-cadastro',
  templateUrl: './card-cadastro.component.html',
  styleUrls: ['./card-cadastro.component.scss']
})
export class CardCadastroComponent {
  data=mockCadastro;
}
