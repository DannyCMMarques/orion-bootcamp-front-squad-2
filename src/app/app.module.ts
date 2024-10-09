import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaInicialComponent } from './pages/tela-inicial/tela-inicial.component';
import { ImagemTelaComponent } from './pages/tela-inicial/imagem-tela/imagem-tela.component';
import { ContentTelaComponent } from './pages/tela-inicial/content-tela/content-tela.component';
import { ButtonTelaInicialComponent } from './pages/tela-inicial/button-tela-inicial/button-tela-inicial.component';
import { LoginProfessorComponent } from './pages/login-professor/login-professor.component';
import { LoginResponsavelComponent } from './pages/login-responsavel/login-responsavel.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    ImagemTelaComponent,
    ContentTelaComponent,
    ButtonTelaInicialComponent,
    LoginProfessorComponent,
    LoginResponsavelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
