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
import { AccountDetailsComponent } from './main/account/account-details/account-details.component';
import { HomeComponent } from './main/home/home.component';

//Services
import {AuthService} from './_services/auth.service';
import {EncryptionService} from './_services/encryption.service';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthGuard} from './_services/auth-guard.service';
import { DropdownDirective } from './_shared/dropdown.directive';
import {AuthInterceptor} from './_interceptors/auth.interceptor';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    AuthComponent,
    LoginComponent,
    HeaderComponent,
    DropdownDirective,
    AccountDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    AccountDetailsComponent
  ],
  providers: [
    AuthService,
    AuthGuard,
    EncryptionService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: {hasBackDrop: false}
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
