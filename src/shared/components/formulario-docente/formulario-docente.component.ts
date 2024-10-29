import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { mockSeletor } from 'src/utils/mocks/mocksSeletor';

@Component({
  selector: 'app-formulario-docente',
  templateUrl: './formulario-docente.component.html',
  styleUrls: ['./formulario-docente.component.scss']
})
export class FormularioDocenteComponent {
  public showError = false; //TODO: implementar uso do showError
  public dataTurma = mockSeletor;
  
  public formulario = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    nomeProfessor: [null, [Validators.required]],
    matricula: [null, [Validators.required]],
    turma: this.formBuilder.control([], Validators.required),
  });

  constructor(private formBuilder: FormBuilder) {}

  public submit(): void {
    if (this.formulario.valid) {
       //  TODO:Mudar quando tiver a api
      this.reset();
    } else {
      this.formulario.markAllAsTouched();
    }
  }

  private reset() {
    this.formulario.reset();
  }

}
