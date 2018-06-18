import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import {NgModule} from '@angular/core';
import {AuthGuard} from './_services/auth-guard.service';
import {MainComponent} from './main/main.component';
import { StreamComponent } from './stream/stream.component';
import {MyinfoComponent} from './myinfo/myinfo.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},

  // These paths require login.
  {path: '', canActivate: [AuthGuard], component: MainComponent},
  {path: 'stream', canActivate: [AuthGuard], component: StreamComponent},

  {path: 'auth', component: AuthComponent},
  {path: 'myinfo', component: MyinfoComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
  // providers: [UserResolver]
})

export class AppRoutingModule {

}