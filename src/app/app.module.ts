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
import { PagesRoutingModule } from './pages/pages-routing.module';
import { TelaPrincipalComponent } from './pages/tela-principal/tela-principal.component';
import { CardCadastroComponent } from 'src/shared/components/card-cadastro/card-cadastro.component';
import { SharedComponentModule } from '../shared/components/shared-component.module'; // ou ajuste o caminho conforme necessário
import { PagesModule } from './pages/pages.module';

@NgModule({
  
    declarations: [AppComponent, TelaPrincipalComponent, CardCadastroComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    AngularToastifyModule,
    PagesRoutingModule,
    SharedComponentModule,
    PagesModule
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
