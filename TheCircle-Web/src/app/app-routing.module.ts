import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import {NgModule} from '@angular/core';

const appRoutes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},

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
