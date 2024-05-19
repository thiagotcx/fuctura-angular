import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { PAGE_SIZE_DEFAULT, PAGE_SIZE_OPTIONS, VEHICLE_TABLE_COLUMNS } from 'src/app/shared/constants/table-columns';
import { Vehicle } from 'src/app/shared/models/vehicle';
import { VehicleService } from 'src/app/shared/services/vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent {

  public displayedColumns: string[] = [
    ...VEHICLE_TABLE_COLUMNS,
    'actions'
  ];

  public dataSource: Vehicle[] = []
  public totalCount: number = 0

  public pageIndex = 0;
  public pageSize = PAGE_SIZE_DEFAULT;
  public pageSizeOptions = PAGE_SIZE_OPTIONS;

  public handlePageEvent(e: PageEvent) {
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;

    this.getVehicleList()
  }

  constructor(
    private vehicleService: VehicleService,
    private router: Router
  ) {
    this.getVehicleList()
  }

  private getVehicleList() {
    this.vehicleService
      .getList({ orderBy: 'desc', paginate: { page: this.pageIndex + 1, limit: this.pageSize } })
      .subscribe(vehicleList => {
        this.dataSource = vehicleList.data
        this.totalCount = vehicleList.count
      })
  }

  public create() {
    this.router.navigateByUrl('/veiculo/cadastrar')
  }

  public update(vehicleId: string) {
    this.router.navigateByUrl(`/veiculo/${vehicleId}/editar`)
  }

  public delete(vehicleId: string): void {
    this.vehicleService
      .delete(vehicleId)
      .subscribe(() => {
        this.getVehicleList()
      })
  }
}
