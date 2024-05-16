export interface SideNavMenu {
    title: string
    icon?: string
    items: SideNavMenuItem[]
}

export interface SideNavMenuItem {
    description: string
    pageTitle: string
    link: string
}
