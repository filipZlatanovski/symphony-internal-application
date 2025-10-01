import { FilledInput, InputLabel } from "@mui/material";
import { labelStyles, inputStyles } from "./inputField.styles";

interface InputFieldProps {
  type?: "number" | "string" | "text" | "email" | "password" | "date";
  label: string;
  placeholder: string;
  htmlFor: string;
  htmlId: string;
  value?: string;
  onChange: (e: any) => void;
}

export default function InputField({
  type,
  label,
  placeholder,
  htmlFor,
  htmlId,
  value,
  onChange,
}: InputFieldProps) {
  return (
    <>
      <div className="pt-[1rem]">
        <InputLabel htmlFor={htmlFor} sx={labelStyles}>
          {label}
        </InputLabel>
      </div>
      <FilledInput
        placeholder={placeholder}
        sx={inputStyles}
        type={type}
        id={htmlId}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
