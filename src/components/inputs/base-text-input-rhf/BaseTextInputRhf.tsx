import { Controller, type FieldValues } from "react-hook-form";
import type { BaseTextInputProps } from "./BaseInput";
import type { BaseRhfProps } from "../../../interfaces/components/BaseRhfProps.interace";
import BaseInput from "./BaseInput";
import { getPropertyFromString } from "../../../utils/obj.utils";

export interface BaseTextInputRhfProps<T extends FieldValues>
  extends BaseRhfProps<T> {
  otherProps?: BaseTextInputProps;
}

export default function BaseTextInputRhf<T extends FieldValues>({
  control,
  name,
  label,
  errors,
  isRequired,
  extraValidate,
  errMessExtra,
  otherProps,
}: BaseTextInputRhfProps<T>) {
  const endErrorObj = getPropertyFromString(errors, name);
  return (
    <div>
      <Controller
        control={control}
        name={name as unknown as any}
        rules={{
          required: isRequired,
          validate: {
            extra_validate: (value) =>
              extraValidate ? extraValidate(value) : true,
          },
        }}
        render={({ field }) => (
          <BaseInput
            {...otherProps}
            value={field.value}
            onChange={field.onChange}
            name={field.name}
            label={label}
            isError={!!endErrorObj}
          />
        )}
      />
      {endErrorObj && (
        <p className="error">
          {endErrorObj?.type === "required" &&
            (label ? label + " không được để trống" : "Không được để trống")}
          {endErrorObj?.type === "extra_validate" && errMessExtra}
        </p>
      )}
    </div>
  );
}
