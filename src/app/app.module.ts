import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularToastifyModule, ToastService } from 'angular-toastify';
import { Interceptor } from 'src/shared/interceptor/AuthInterceptor.interceptor';
import { LoginCadastroService } from 'src/shared/services/login-cadastro.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmAlunosComponent } from './pages/adm-alunos/adm-alunos.component';
import { AdmProfessoresComponent } from './pages/adm-professores/adm-professores.component';
import { AdmTurmasComponent } from './pages/adm-turmas/adm-turmas.component';
import { LoginModule } from './pages/login/login.module';
import { PagesRoutingModule } from './pages/pages-routing.module';

@NgModule({
  declarations: [AppComponent, AdmProfessoresComponent, AdmAlunosComponent, AdmTurmasComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    LoginModule,
    FontAwesomeModule,
    AngularToastifyModule,
    PagesRoutingModule,
  ],
  providers: [
    ToastService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true,
    },
    LoginCadastroService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
