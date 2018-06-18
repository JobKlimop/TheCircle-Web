// Imports.
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

// Components.
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './main/header/header.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { StreamComponent } from './stream/stream.component';
import { VideoComponent } from './stream/video/video.component';
import { ChatComponent } from './stream/chat/chat.component';
import { MyinfoComponent } from './myinfo/myinfo.component';

// Services.
import { AuthService } from './_services/auth.service';
import { AuthGuard } from './_services/auth-guard.service';
import { EncryptionService } from './_services/encryption.service';
import { ChatService } from './_services/chat.service';
import { DropdownDirective } from './_shared/dropdown.directive';
import {AuthInterceptor} from './_interceptors/auth.interceptor';
import {RouterModule} from '@angular/router';
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    AuthComponent,
    LoginComponent,
    StreamComponent,
    MyinfoComponent,
    VideoComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      preventDuplicates: true
    }),
    RouterModule.forRoot([]),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    EncryptionService,
    ChatService,
    EncryptionService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
