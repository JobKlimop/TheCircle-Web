// Imports.
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

// Components.
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './main/header/header.component';

import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import {AuthService} from './_services/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {AuthGuard} from './_services/auth-guard.service';
import {EncryptionService} from './_services/encryption.service';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    AuthComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    EncryptionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
