import { SideNavMenu } from "../models/side-nav-menu";

export const SIDENAV_MENU: SideNavMenu[] = [
    {
        title: 'Principal',
        icon: 'dashboard',
        items: [
            {
                description: 'Dashboard',
                pageTitle: 'Dashboard',
                link: '/dashboard'
            }
        ]
    },
    {
        title: 'Veículo',
        icon: 'directions_car',
        items: [
            {
                description: 'Listagem',
                pageTitle: 'Listagem de Veículos',
                link: '/veiculo'
            },
            {
                description: 'Cadastro',
                pageTitle: 'Cadastro de Veículo',
                link: '/veiculo/cadastrar'
            }
        ]
    }
]
