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
import { LoginModule } from './pages/login/login.module';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { TelaPrincipalComponent } from './pages/tela-principal/tela-principal.component';
import { CardCadastroComponent } from 'src/shared/components/card-cadastro/card-cadastro.component';
import { ButtonComponentModule } from '../shared/components/button/button.module'
import { TelaInicialComponent } from './pages/tela-inicial/tela-inicial.component';
import { ImagemTelaComponent } from './pages/tela-inicial/imagem-tela/imagem-tela.component';
import { ContentTelaComponent } from './pages/tela-inicial/content-tela/content-tela.component';
import { ButtonTelaInicialComponent } from './pages/tela-inicial/button-tela-inicial/button-tela-inicial.component';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [AppComponent, TelaPrincipalComponent, CardCadastroComponent],
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
    ButtonComponentModule
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
