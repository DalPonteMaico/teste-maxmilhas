import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { cpf } from 'cpf-cnpj-validator';

@ValidatorConstraint({ name: 'validCpf', async: false })
export class ValidCpf implements ValidatorConstraintInterface {
  validate(text: string, args: ValidationArguments) {
    return cpf.isValid(text);
  }

  defaultMessage(args: ValidationArguments) {
    return 'Invalid document (cpf)';
  }
}
