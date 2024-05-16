import { AfterContentInit, AfterViewInit, Component } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router, RouterStateSnapshot } from '@angular/router';
import { filter } from 'rxjs';
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

  constructor(
    private applicationService: ApplicationService,
    private authenticationService: AuthenticationService
  ) {
    this.applicationService.getPageTitle()
      .subscribe((pageTitle) => {
        this.pageTitle = pageTitle
      })
    
    this.isAuthenticated = this.authenticationService.getIsAuthenticated()
  }
}
