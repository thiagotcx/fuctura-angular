import { Component } from '@angular/core';
import { VEHICLE_TABLE_COLUMNS } from 'src/app/shared/constants/table-columns';
import { Vehicle } from 'src/app/shared/models/vehicle';
import { VehicleService } from 'src/app/shared/services/vehicle.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  public displayedColumns: string[] = VEHICLE_TABLE_COLUMNS;

  public dataSource: Vehicle[] = []

  constructor(private vehicleService: VehicleService) {
    this.vehicleService
      .getList({ sizeLimit: 5, orderBy: 'desc' })
      .subscribe(vehicleList => this.dataSource = vehicleList.data)
  }
}
