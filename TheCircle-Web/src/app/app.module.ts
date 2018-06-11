import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AuthComponent } from './auth/auth.component';
import {AppRoutingModule} from './app-routing.module';
import { LoginComponent } from './auth/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './_services/auth.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
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
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
