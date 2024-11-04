import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastService } from 'angular-toastify';
import { CadastrarService } from 'src/shared/services/cadastrar.service';
import { NotificacoesService } from 'src/shared/services/notificacoes.service';
import { mockSeletor } from 'src/utils/mocks/mocksSeletor';

@Component({
  selector: 'app-formulario-estudante',
  templateUrl: './formulario-estudante.component.html',
  styleUrls: ['./formulario-estudante.component.scss'],
})
export class FormularioEstudanteComponent {
  public dataTurma = mockSeletor;
  public showError = false; //TODO: implementar uso do showError
  public isOpen = false;
  public formulario = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    nomeAluno: [null, [Validators.required]],
    matricula: [null, [Validators.required]],
    CPF: [null, [Validators.required, Validators.pattern(/^\d{11}$/)]],
    turma: [null, [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private _toastService: ToastService,
    private cadastrarService: CadastrarService,
    private _notificacoesService: NotificacoesService
  ) {}

  // private addInfoToastError() {
  //   this._toastService.error('Ocorreu um erro inesperado no sistema');
  // }
  // private addInfoToastSuccess() {
  //   this._toastService.success('Estudante cadastrado com sucesso');
  // }
  public submit(): void {
    // this.addInfoToastSuccess();
    // this._toastService.success('Estudante cadastrado com sucesso');
    this._notificacoesService.openSnackBar('Essa mensagem é um teste','Ok');

    this.formulario.markAllAsTouched();
    if (this.formulario.valid) {
      this.cadastrarService.cadastroEstudante(this.formulario.value).subscribe({
        next: (response) => {
          // if (response && response.success) {
          //   // this.addInfoToastSuccess();
          //   // this._notificacoesService.openSnackBar('Essa mensagem é um teste','Ok');
          // }
          this._toastService.success('Estudante cadastrado com sucesso');
          this.reset();
        },
        error: (error) => {
          if (error.status === 409) {
            //  TODO:Mudar quando tiver a api
            this.isOpen = true;
            this.showError = true;
          } else {
            // this.addInfoToastError();
          }
        },
      });
      this.reset();
    } else {
      this.formulario.markAllAsTouched();
    }
  }

  private reset() {
    this.formulario.reset();
  }
}
