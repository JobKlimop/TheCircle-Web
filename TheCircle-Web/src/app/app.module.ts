import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import {StreamerService} from "./services/streamer.service";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [StreamerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
