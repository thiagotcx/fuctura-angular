export const PARAM_ID: string = ':id'

export const ROUTES = {
    LOGIN: '/login',
    REGISTER: '/register',
    VEHICLES: '/vehicles',
    VEHICLE_ITEM: '/vehicles/' + PARAM_ID,
}
    
export function getVehicleItemRoute(vehicleId: string): string {
    return ROUTES.VEHICLE_ITEM.replace(PARAM_ID, vehicleId)
}

export function getVehicleListRoute(
    sortBy: string,
    order: string,
    paginate?: {
        page: number,
        limit: number
    }
): string {
    const paginateString = paginate ? `_page=${paginate.page}&_limit=${paginate.limit}&` : ''

    return `${ROUTES.VEHICLES}?${paginateString}_sort=${sortBy}&_order=${order}`
}
