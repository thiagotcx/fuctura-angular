interface Route {
    [key: string]: string
}

export const ROUTES = {
    LOGIN: '/login',
    REGISTER: '/register',
    VEHICLES: '/vehicles',
    VEHICLE_ITEM: '/vehicles/:id',
}