export enum ErrorTypeEnum {
    REQUIRED = 'required',
    EMAIL = 'email',
    MIN_LENGTH = 'minlength',
    MAX_LENGTH = 'maxlength',
}

export function getErrorTypeEnum(error: string): ErrorTypeEnum {
    const valueIndex = Object.values(ErrorTypeEnum).indexOf(error as ErrorTypeEnum)
    const key = Object.keys(ErrorTypeEnum)[valueIndex]

    return ErrorTypeEnum[key as keyof typeof ErrorTypeEnum]
}
