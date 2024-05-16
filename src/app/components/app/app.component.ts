import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ApplicationService } from 'src/app/shared/services/application.service';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public pageTitle: string | null = null
  public isAuthenticated: boolean = false

  @ViewChild('drawer') sidenav!: MatDrawer;

  constructor(
    private applicationService: ApplicationService,
    private authenticationService: AuthenticationService
  ) {
    this.applicationService.getPageTitle()
      .subscribe((pageTitle) => {
        this.pageTitle = pageTitle
        this.sidenav.close()
      })
    
    this.authenticationService
      .getIsAuthenticated()
      .events
      .subscribe((isAuthenticated: boolean) => {
        this.isAuthenticated = isAuthenticated
      })
  }

  public logout() {
    this.authenticationService.logout()
    this.sidenav.close()
  }
}
