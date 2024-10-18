import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { mocksSeletor } from 'src/utils/mocks/mocksSelector';

@Component({
  selector: 'app-formulario-turmas',
  templateUrl: './formulario-turmas.component.html',
  styleUrls: ['./formulario-turmas.component.scss'],
})
export class FormularioTurmasComponent {
  public showError = false;
  public errorMessage =
    'Por favor, corrija os erros antes de enviar o formulário.';
  public formulario: FormGroup;
  public dataTurma = mocksSeletor;

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      anoEscolar: ['', Validators.required],
      turno: ['', Validators.required],
      ensino: ['', Validators.required],
      identificador: ['', Validators.required],
    });

    this.formulario.statusChanges.subscribe((status) => {
      if (status === 'VALID') {
        this.showError = false;
      }
    });
  }

  public onSubmit(): void {
    if (this.formulario && this.formulario.valid) {
      this.resetForm();
      this.showError = false;
    } else {
      this.showError = true;
      this.formulario?.markAllAsTouched();
    }
  }

  private resetForm() {
    if (this.formulario) {
      this.formulario.reset();
    }
  }
}
