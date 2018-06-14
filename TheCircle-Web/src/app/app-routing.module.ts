import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import {NgModule} from '@angular/core';
import {AuthGuard} from './_services/auth-guard.service';
import {MainComponent} from './main/main.component';
import {AccountDetailsComponent} from './main/account/account-details/account-details.component';
import {HomeComponent} from './main/home/home.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},

  {path: '', canActivate: [AuthGuard], component: MainComponent, children: [
      {path: 'home', component: HomeComponent},
      // {path: 'stream', component: StreamComponent}
    ]},

  {path: 'auth', component: AuthComponent}
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
