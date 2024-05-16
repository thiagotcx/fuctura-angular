import { Injectable } from '@angular/core';
import { AuthenticationLogin } from '../models/authentication-login';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';
import { ApplicationService } from './application.service';
import { ApplicationHttpService } from './application-http.service';
import { ROUTES } from '../constants/routes';

type Authentication = {
  value: boolean
  events: Observable<boolean>
}

type UpdateAutentication = {
  isAuthenticated: boolean
  token: string | null
  routerRedirect: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private isAuthenticated: boolean = false
  private isAuthenticatedValueChanges = new BehaviorSubject<boolean>(false)

  constructor(
    private router: Router,
    private applicationService: ApplicationService,
    private applicationHttpService: ApplicationHttpService,
  ) {
    if (this.applicationService.getToken()) {
      this.setIsAuthenticated(true)
    }
  }

  public getIsAuthenticated(): Authentication {
    return {
      value: this.isAuthenticated,
      events: this.isAuthenticatedValueChanges.asObservable()
    }
  }

  public login(authenticationLogin: AuthenticationLogin): void {
    this.applicationHttpService.post<{ accessToken?: string }>(
      ROUTES.LOGIN, authenticationLogin
    )
      .pipe(map((response) => response.body))
      .subscribe((response) => {
        if (response && response.accessToken) {
          this.updateAuthentication({
            isAuthenticated: true,
            token: response.accessToken,
            routerRedirect: '/dashboard'
          })
        }
    })
  }

  public logout(): void {
    this.updateAuthentication({
      isAuthenticated: false,
      token: null,
      routerRedirect: '/entrar'
    })
  }

  private updateAuthentication(updateAutentication: UpdateAutentication): void {
    this.setIsAuthenticated(updateAutentication.isAuthenticated)
    this.applicationService.setToken(updateAutentication.token)
    this.router.navigateByUrl(updateAutentication.routerRedirect)
  }

  private setIsAuthenticated(isAuthenticated: boolean): void {
    this.isAuthenticated = isAuthenticated
    this.isAuthenticatedValueChanges.next(isAuthenticated)
  }
}
