// Imports.
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing-module';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
 
// Components.
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './main/header/header.component';
import { StreamComponent } from './stream/stream.component';
import { VideoComponent } from './stream/video/video.component';
import { ChatComponent } from './stream/chat/chat.component';

// Service.
import { ChatService } from './_Services/chat.service';

// Configuration.
const config: SocketIoConfig = { url: 'ws://the-circle-chat.herokuapp.com/', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    StreamComponent,
    VideoComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
