import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EMAIL_VALIDATIONS, PASSWORD_VALIDATIONS } from '../../constants/validations';
import { EMAIL_ERROR_MESSAGES, PASSWORD_ERROR_MESSAGES } from '../../constants/error-messages';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { AuthenticationLogin } from 'src/app/shared/models/authentication-login';
import { getErrorTypeEnum } from 'src/app/shared/enums/error-type-enum';

type ErrorMessage = string | undefined

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public loginForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', EMAIL_VALIDATIONS],
      password: ['', PASSWORD_VALIDATIONS]
    })
  }
  
  public submitForm(): void {
    const authenticationLogin: AuthenticationLogin = this.loginForm.value
    this.authenticationService.login(authenticationLogin)
  }

  public getErrorMessage(formField: string): ErrorMessage {
    const control = this.loginForm.controls[formField]
    
    if (control && control.errors) {
      const errorTypeKey: string = Object.keys(control.errors)[0]

      switch (formField) {
        case 'email':
          return EMAIL_ERROR_MESSAGES[getErrorTypeEnum(errorTypeKey)]
        case 'password':
          return PASSWORD_ERROR_MESSAGES[getErrorTypeEnum(errorTypeKey)]
      }
    }

    return ''
  }

  public formIsInvalid(): boolean {
    return this.loginForm.invalid
  }
}
