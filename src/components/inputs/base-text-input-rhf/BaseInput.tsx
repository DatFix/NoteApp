import { Input } from "antd";
import type { InputHTMLAttributes } from "react";

type TypesInput = 'text' | 'password' | 'number';

interface BaseTextInputProp
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange' | 'value'> {
  type?: TypesInput;
  label?: string;
  value?: string | number;
  onChange?: (input: string | number) => void;
  isError?: boolean;
}

export default function BaseInput({
  type = 'text',
  label,
  value,
  onChange,
  isError,
  ...otherProps
}: BaseTextInputProp) {
  const defaultIdForInput = otherProps?.id || otherProps?.name;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (type === 'number') {
      onChange?.(Number(val));
    } else {
      onChange?.(val);
    }
  };

  const commonProps = {
    id: defaultIdForInput,
    value,
    onChange: handleChange,
    status: isError ? 'error' : '',
    ...otherProps,
  };

  return (
    <div>
      {label && <label htmlFor={defaultIdForInput}>{label}</label>}
      {type === 'password' ? (
        <Input.Password {...commonProps} />
      ) : (
        <Input {...commonProps} type={type} />
      )}
    </div>
  );
}
