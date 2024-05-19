import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { VehicleRoutingModule } from './vehicle-routing.module';
import { VehicleItemComponent } from './components/vehicle-item/vehicle-item.component';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { VehicleRegisterComponent } from './components/vehicle-register/vehicle-register.component';
import { VehicleUpdateComponent } from './components/vehicle-update/vehicle-update.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    VehicleItemComponent,
    VehicleListComponent,
    VehicleRegisterComponent,
    VehicleUpdateComponent
  ],
  imports: [
    CommonModule,
    VehicleRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule
  ]
})
export class VehicleModule { }
