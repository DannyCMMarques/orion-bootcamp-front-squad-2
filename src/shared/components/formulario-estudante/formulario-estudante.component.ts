import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { mockSeletor } from 'src/utils/mocks/mocksSeletor';

@Component({
  selector: 'app-formulario-estudante',
  templateUrl: './formulario-estudante.component.html',
  styleUrls: ['./formulario-estudante.component.scss'],
})
export class FormularioEstudanteComponent {
  public dataTurma = mockSeletor;

  public formulario = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    nomeAluno: [null, [Validators.required]],
    matricula: [null, [Validators.required]],
    CPF: [null, [Validators.required, Validators.pattern(/^\d{11}$/)]],
    turma: [null, [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder) {}

  public submit(): void {
    if (this.formulario.valid) {
      this.reset();
    } else {
      this.formulario.markAllAsTouched();
    }
  }

  private reset() {
    this.formulario.reset();
  }

}
