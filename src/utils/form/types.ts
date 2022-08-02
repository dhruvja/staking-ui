import { Message, Validate, ValidationRule } from "react-hook-form";

export type RegisterOptions<T> = Partial<{
  required: Message | ValidationRule<boolean>;
  min: ValidationRule<number | string>;
  max: ValidationRule<number | string>;
  maxLength: ValidationRule<number | string>;
  minLength: ValidationRule<number | string>;
  pattern: ValidationRule<RegExp>;
  validate: Validate<T> | Record<string, Validate<T>>;
}>;
