import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { mockSeletor } from 'src/utils/mocks/mocksSeletor';

@Component({
  selector: 'app-formulario-estudante',
  templateUrl: './formulario-estudante.component.html',
  styleUrls: ['./formulario-estudante.component.scss']
})
export class FormularioEstudanteComponent {
  public dataTurma = mockSeletor;
  public formulario = this.formBuilder.group({
    email: [null, [Validators.required]],
    nomeAluno: [null, [Validators.required]],
    matricula: [null, [Validators.required]],
    CPF: [null, [Validators.required]],
    turma:[null, [Validators.required]]


  });

  constructor(    private formBuilder: FormBuilder,
  ){

  }
  public submit (){
    console.log(this.formulario.value)
  }
}
