import { FilledInput, InputLabel } from "@mui/material";
import { labelStyles, inputStyles } from "./inputField.styles";
import type { ChangeEvent } from "react";

interface InputFieldProps {
  type: "number" | "string";
  label: string;
  placeholder: string;
  htmlFor: string;
  htmlId: string;
  value: string | number;
  onValueChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField({
  type,
  label,
  placeholder,
  htmlFor,
  htmlId,
  value,
  onValueChange,
}: InputFieldProps) {
  return (
    <>
      <InputLabel htmlFor={htmlFor} sx={labelStyles}>
        {label}
      </InputLabel>
      <div className="pb-4">
        <FilledInput
          placeholder={placeholder}
          sx={inputStyles}
          type={type}
          id={htmlId}
          value={value}
          onChange={onValueChange}
        />
      </div>
    </>
  );
}
