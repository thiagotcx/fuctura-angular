export interface Vehicle {
    vehicleId: string
    licensePlate: string
    model: string
    year: number
    fipePrice: number
    creationDate: string
}

export interface VehicleResponse extends Vehicle {
    id: string
    vehicleId: never
}

export interface VehicleForm extends Vehicle {
    vehicleId: never
    creationDate: never
}
