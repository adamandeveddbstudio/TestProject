import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule), },
  { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule), },
  { path: 'users', loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule), },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static components = [
  ]

}
