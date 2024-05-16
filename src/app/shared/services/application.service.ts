import { Injectable } from '@angular/core';
import { ApplicationState } from '../models/application-state';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  private applicationState: ApplicationState = {
    pageTitle: new Subject(),
    token: null
  }

  constructor() {
    this.loadToken()
  }

  getToken(): string | null {
    return this.applicationState.token
  }

  getPageTitle(): Observable<string> {
    return this.applicationState.pageTitle.asObservable()
  }

  setToken(token: string | null): void {
    this.applicationState.token = token

    if (token)
      localStorage.setItem('token', token)
    else
      localStorage.removeItem('token')
  }

  setPageTitle(pageTitle: string): void {
    console.log('setPageTitle ' + pageTitle)
    this.applicationState.pageTitle.next(pageTitle)
  }

  loadToken(): void {
    this.applicationState.token = localStorage.getItem('token')
  }
}
