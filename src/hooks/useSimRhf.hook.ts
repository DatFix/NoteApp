import { useForm, type FieldValues, type UseFormProps } from "react-hook-form";
import type { SimFormReturn } from "../types/sim-rhf.types";

export function useSimRhf<T extends FieldValues>(
  options?: Partial<UseFormProps<T>>,
) {
  return useForm<any>(options) as SimFormReturn<T>;
}
