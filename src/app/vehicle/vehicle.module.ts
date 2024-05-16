import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleRoutingModule } from './vehicle-routing.module';
import { VehicleItemComponent } from './components/vehicle-item/vehicle-item.component';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { VehicleRegisterComponent } from './components/vehicle-register/vehicle-register.component';


@NgModule({
  declarations: [
    VehicleItemComponent,
    VehicleListComponent,
    VehicleRegisterComponent
  ],
  imports: [
    CommonModule,
    VehicleRoutingModule
  ]
})
export class VehicleModule { }
