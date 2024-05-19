import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Vehicle, VehicleForm } from 'src/app/shared/models/vehicle';
import { VehicleService } from 'src/app/shared/services/vehicle.service';
import { FIPE_PRICE_VALIDATIONS, LICENSE_PLATE_VALIDATIONS, MODEL_VALIDATIONS, YEAR_VALIDATIONS } from '../../constants/validations';
import { FIPE_PRICE_ERROR_MESSAGES, LICENSE_PLATE_ERROR_MESSAGES, MODEL_ERROR_MESSAGES, YEAR_ERROR_MESSAGES } from '../../constants/error-messages';
import { getErrorTypeEnum } from 'src/app/shared/enums/error-type-enum';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs';

type ErrorMessage = string | undefined

@Component({
  selector: 'app-vehicle-update',
  templateUrl: './vehicle-update.component.html',
  styleUrls: ['./vehicle-update.component.scss']
})
export class VehicleUpdateComponent {

  public updateVehicleForm: FormGroup;

  private vehicle?: Vehicle;

  constructor(
    private formBuilder: FormBuilder,
    private vehicleService: VehicleService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.updateVehicleForm = this.formBuilder.group({
      licensePlate: [{ value: '', disabled: true }, LICENSE_PLATE_VALIDATIONS],
      model: ['', MODEL_VALIDATIONS],
      year: ['', YEAR_VALIDATIONS],
      fipePrice: ['', FIPE_PRICE_VALIDATIONS],
    })

    this.activatedRoute
      .params
      .pipe(switchMap((params: Params) => this.vehicleService.get(params['id'])))
      .subscribe((vehicle: Vehicle | null) => {
        if (vehicle) {
          this.vehicle = vehicle;

          this.updateVehicleForm.setValue({
            licensePlate: vehicle.licensePlate,
            model: vehicle.model,
            year: vehicle.year,
            fipePrice: vehicle.fipePrice
        })
        }
      })
  }

  public submitForm(): void {
    if (this.vehicle) {
      const vehicleForm: VehicleForm = this.updateVehicleForm.value

      this.vehicleService.update(this.vehicle.vehicleId, {
        ...this.vehicle,
        ...vehicleForm
      })
        .subscribe(_ => {
          this.router.navigateByUrl('/veiculo')
        })
    }
  }

  public getErrorMessage(formField: string): ErrorMessage {
    const control = this.updateVehicleForm.controls[formField]

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
    return this.updateVehicleForm.invalid
  }

  public cancelForm(): void {
    this.router.navigateByUrl('/veiculo')
  }
}
