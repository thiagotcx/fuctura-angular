import { Component } from '@angular/core';

import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

import { SideNavMenu } from '../../models/side-nav-menu';
import { ApplicationService } from '../../services/application.service';
import { SIDENAV_MENU } from '../../constants/side-nav-menu';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {

  public sideNavMenuList: SideNavMenu[] = SIDENAV_MENU

  constructor(
    private applicationService: ApplicationService,
    private router: Router
  ) {
    router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((_) => {
        SIDENAV_MENU.forEach((menu) => {
          menu.items.forEach((item) => {
            if (item.link === this.router.url.toString()) {
              this.changePageTitle(item.pageTitle)
            }
          })
        })
      });
  }

  public changePageTitle(pageTitle: string): void {
    this.applicationService.setPageTitle(pageTitle)
  }
}
