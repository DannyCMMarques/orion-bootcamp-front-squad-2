import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularToastifyModule, ToastService } from 'angular-toastify';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './pages/login/login.module';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { TelaPrincipalComponent } from './pages/tela-principal/tela-principal.component';
import { CardCadastroComponent } from 'src/shared/components/card-cadastro/card-cadastro.component';
import { ButtonComponentModule } from '../shared/components/button/button.module'

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
  providers: [ToastService],
  bootstrap: [AppComponent],
})
export class AppModule {}
