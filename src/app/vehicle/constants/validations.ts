import { Validators } from "@angular/forms";

const LICENSE_PLATE_PATTERN: RegExp = /[aA-zZ]{4}\-[0-9]{4}/g

export const LICENSE_PLATE_VALIDATIONS = [
    Validators.required,
    Validators.minLength(9),
    Validators.maxLength(9),
    Validators.pattern(LICENSE_PLATE_PATTERN)
]

export const MODEL_VALIDATIONS = [
    Validators.required,
]

export const YEAR_VALIDATIONS = [
    Validators.required,
    Validators.max(new Date().getFullYear())
]

export const FIPE_PRICE_VALIDATIONS = [
    Validators.required,
]

