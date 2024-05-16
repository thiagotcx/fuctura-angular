import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { authenticatorGuard } from '../shared/guards/authenticator.guard';

const routes: Routes = [
  { path: 'entrar', component: LoginComponent },
  { path: 'cadastro', component: RegisterComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    canActivate: [authenticatorGuard]
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
