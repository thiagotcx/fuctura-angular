
import { ErrorTypeEnum } from "src/app/shared/enums/error-type-enum"

type ErrorMessage = {
    [key in ErrorTypeEnum]?: string;
}

export const LICENSE_PLATE_ERROR_MESSAGES: ErrorMessage = {
    [ErrorTypeEnum.REQUIRED]: 'Placa do veículo é um campo obrigatório.',
    [ErrorTypeEnum.MIN_LENGTH]:
        'Placa do veículo deve conter no mínimo 9 caracteres.',
    [ErrorTypeEnum.MAX_LENGTH]:
        'Placa do veículo deve conter no máximo 9 caracteres.',
    [ErrorTypeEnum.PATTERN]: 'Placa do veículo fora de formatação'
}

export const MODEL_ERROR_MESSAGES: ErrorMessage = {
    [ErrorTypeEnum.REQUIRED]: 'Modelo do veículo é um campo obrigatório.',
}

export const YEAR_ERROR_MESSAGES: ErrorMessage = {
    [ErrorTypeEnum.REQUIRED]: 'Ano do veículo é um campo obrigatório.',
    [ErrorTypeEnum.MAX]: 'Ano do veículo não pode ultrapassar o ano atual',
}

export const FIPE_PRICE_ERROR_MESSAGES: ErrorMessage = {
    [ErrorTypeEnum.REQUIRED]: 'Valor da tabela FIPE do veículo é um campo obrigatório.',
}