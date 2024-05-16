import { Component } from '@angular/core';
import { ROUTES } from 'src/app/shared/constants/routes';
import { ApplicationHttpService } from 'src/app/shared/services/application-http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private applicationHttpService: ApplicationHttpService) {
    this.applicationHttpService.get(ROUTES.VEHICLES)
      .subscribe((response) => {
        console.log({ response })
      })
  }
}
