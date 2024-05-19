import { Vehicle, VehicleResponse } from "../models/vehicle";

export class VehicleMapper {

    public static toVehicle({
        id,
        licensePlate,
        model,
        year,
        fipePrice,
        creationDate
    }: VehicleResponse): Vehicle {
        return {
            vehicleId: id,
            licensePlate,
            model,
            year,
            fipePrice,
            creationDate
        }
    }

    public static toVehicleList(vehicleResponseList: VehicleResponse[]): Vehicle[] {
        return vehicleResponseList
            ?.map((vehicleResponse: VehicleResponse): Vehicle =>
                VehicleMapper.toVehicle(vehicleResponse))
    }
}
