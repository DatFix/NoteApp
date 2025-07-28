import type { Control, FieldErrors, FieldValues } from "react-hook-form";
import type { SimPath } from "../../types/sim-rhf.types";

export interface BaseRhfProps<T extends FieldValues> {
  control: Control<T>;
  name: SimPath<T>;
  label?: string;
  errors?: FieldErrors<T>;
  isRequired?: boolean;
  extraValidate?: (value: string) => boolean;
  errMessExtra?: string;
}
