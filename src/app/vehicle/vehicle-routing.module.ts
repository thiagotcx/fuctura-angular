import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { authenticatorGuard } from '../shared/guards/authenticator.guard';
import { VehicleItemComponent } from './components/vehicle-item/vehicle-item.component';
import { VehicleRegisterComponent } from './components/vehicle-register/vehicle-register.component';
import { VehicleUpdateComponent } from './components/vehicle-update/vehicle-update.component';

const routes: Routes = [
  {
    path: '',
    component: VehicleListComponent, pathMatch: 'full',
    canActivate: [authenticatorGuard]
  },
  {
    path: 'cadastrar',
    component: VehicleRegisterComponent,
    canActivate: [authenticatorGuard]
  },
  {
    path: ':id',
    component: VehicleItemComponent,
    canActivate: [authenticatorGuard]
  },
  {
    path: ':id/editar',
    component: VehicleUpdateComponent,
    canActivate: [authenticatorGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleRoutingModule { }
