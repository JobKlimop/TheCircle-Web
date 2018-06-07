// Imports.
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components.
import { MainComponent } from './main/main.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full'},
    { path: 'main', component: MainComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}