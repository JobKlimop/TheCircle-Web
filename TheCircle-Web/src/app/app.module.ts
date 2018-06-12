// Imports.
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing-module';

// Components.
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
<<<<<<< HEAD
import { HeaderComponent } from './main/header/header.component';
=======
import { AuthComponent } from './auth/auth.component';
import {AppRoutingModule} from './app-routing.module';
import { LoginComponent } from './auth/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './_services/auth.service';
import {HttpClientModule} from '@angular/common/http';
>>>>>>> authorization

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
<<<<<<< HEAD
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
=======
    AuthComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
>>>>>>> authorization
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
