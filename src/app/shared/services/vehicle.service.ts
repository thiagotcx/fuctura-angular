import { Injectable } from '@angular/core';
import { ApplicationHttpService } from './application-http.service';
import { Vehicle, VehicleResponse } from '../models/vehicle';
import { Observable, map, tap } from 'rxjs';
import { ROUTES, getVehicleItemRoute, getVehicleListRoute } from '../constants/routes';
import { VehicleMapper } from '../mappers/vehicle-mapper';
import { HttpResponse } from '@angular/common/http';

type GetVehicleList = {
  filters?: string
  sizeLimit?: number
  sortBy?: string
  orderBy?: string
  paginate?: GetVehicleListPaginated
}

type GetVehicleListPaginated = {
  page: number
  limit: number
}

const SORT_DEFAULT: string = 'creationDate'
const ORDER_DEFAULT: string = 'asc'

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private applicationHttpService: ApplicationHttpService) { }

  public getList({
    sortBy = SORT_DEFAULT,
    orderBy = ORDER_DEFAULT,
    sizeLimit,
    paginate
  }: GetVehicleList): Observable<{
    data: Vehicle[],
    count: number
  }> {
    let totalCount = 0

    return this.applicationHttpService
      .get<VehicleResponse[]>(getVehicleListRoute(sortBy, orderBy, paginate))
      .pipe(
        tap(response => totalCount = this.getTotalCount(response)),
        map(response => response.body),
        map((vehicleResponseList): Vehicle[] => vehicleResponseList
          ? VehicleMapper.toVehicleList(vehicleResponseList)
          : []),
        map(vehicleList => sizeLimit
          ? vehicleList.splice(0, sizeLimit)
          : vehicleList
        ),
        map(vehicleList => ({
          data: vehicleList,
          count: totalCount
        }))
      )
  }

  public get(vehicleId: string): Observable<Vehicle | null> {
    return this.applicationHttpService
      .get<VehicleResponse>(getVehicleItemRoute(vehicleId))
      .pipe(
        map(response => response.body),
        map((vehicleResponse): Vehicle | null => vehicleResponse
          ? VehicleMapper.toVehicle(vehicleResponse)
          : null)
      )
  }

  public create(vehicle: Vehicle): Observable<any> {
    return this.applicationHttpService.post(ROUTES.VEHICLES, {
      ...vehicle,
      creationDate: new Date().toISOString()
    })
  }

  public update(vehicleId: string, vehicle: Vehicle): Observable<any> {
    return this.applicationHttpService.put(getVehicleItemRoute(vehicleId), vehicle)
  }

  public delete(vehicleId: string): Observable<any> {
    return this.applicationHttpService.delete(getVehicleItemRoute(vehicleId))
  }

  private getTotalCount(response: HttpResponse<any>): number {
    return response.headers.get('X-Total-Count')
      ? Number(response.headers.get('X-Total-Count'))
      : 0
  }
}
