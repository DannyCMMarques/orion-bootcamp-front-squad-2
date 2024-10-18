import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-turmas',
  templateUrl: './formulario-turmas.component.html',
  styleUrls: ['./formulario-turmas.component.scss'],
})
export class FormularioTurmasComponent {
  showError = false;
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      anoEscolar: ['', Validators.required],
      turno: ['', Validators.required],
      ensino: ['', Validators.required],
      identificador: ['', [Validators.required, Validators.maxLength(20)]],
    });
  }

  getErrorMessage(controlName: string, fieldLabel: string): string {
    const control = this.formulario.controls[controlName];
    if (control.hasError('required') && control.touched) {
      return `É obrigatório informar o ${fieldLabel}`;
    } else if (control.hasError('maxlength') && control.touched) {
      return 'Campo de texto com limite de 20 caracteres; aceita letras, números e caracteres especiais.';
    }
    return '';
  }

  getShowError(controlName: string): boolean {
    const control = this.formulario.controls[controlName];
    return (control.invalid && control.touched) || this.showError;
  }

  onSubmit() {
    if (this.formulario && this.formulario.valid) {
      this.resetForm();
    } else {
      this.formulario?.markAllAsTouched();
    }
  }

  resetForm() {
    if (this.formulario) {
      this.formulario.reset();
    }
  }
}
