import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VehicleForm } from 'src/app/shared/models/vehicle';
import { VehicleService } from 'src/app/shared/services/vehicle.service';
import { FIPE_PRICE_VALIDATIONS, LICENSE_PLATE_VALIDATIONS, MODEL_VALIDATIONS, YEAR_VALIDATIONS } from '../../constants/validations';
import { FIPE_PRICE_ERROR_MESSAGES, LICENSE_PLATE_ERROR_MESSAGES, MODEL_ERROR_MESSAGES, YEAR_ERROR_MESSAGES } from '../../constants/error-messages';
import { getErrorTypeEnum } from 'src/app/shared/enums/error-type-enum';
import { Router } from '@angular/router';

type ErrorMessage = string | undefined

@Component({
  selector: 'app-vehicle-register',
  templateUrl: './vehicle-register.component.html',
  styleUrls: ['./vehicle-register.component.scss']
})
export class VehicleRegisterComponent {

  public createVehicleForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private vehicleService: VehicleService,
    private router: Router
  ) {
    this.createVehicleForm = this.formBuilder.group({
      licensePlate: ['', LICENSE_PLATE_VALIDATIONS],
      model: ['', MODEL_VALIDATIONS],
      year: ['', YEAR_VALIDATIONS],
      fipePrice: ['', FIPE_PRICE_VALIDATIONS],
    })
  }

  public submitForm(): void {
    const vehicle: VehicleForm = this.createVehicleForm.value
    this.vehicleService.create(vehicle)
      .subscribe(response => {
        this.router.navigateByUrl('/veiculo')
      })
  }

  public getErrorMessage(formField: string): ErrorMessage {
    const control = this.createVehicleForm.controls[formField]

    if (control && control.errors) {
      const errorTypeKey: string = Object.keys(control.errors)[0]

      switch (formField) {
        case 'licensePlate':
          return LICENSE_PLATE_ERROR_MESSAGES[getErrorTypeEnum(errorTypeKey)]
        case 'model':
          return MODEL_ERROR_MESSAGES[getErrorTypeEnum(errorTypeKey)]
        case 'year':
          return YEAR_ERROR_MESSAGES[getErrorTypeEnum(errorTypeKey)]
        case 'fipePrice':
          return FIPE_PRICE_ERROR_MESSAGES[getErrorTypeEnum(errorTypeKey)]
      }
    }

    return ''
  }

  public formIsInvalid(): boolean {
    return this.createVehicleForm.invalid
  }

  public cancelForm(): void {
    this.router.navigateByUrl('/veiculo')
  }
}
