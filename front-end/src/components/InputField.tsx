interface InputFieldProps {
  label?: string;
  type?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField({ label, type = "text", value, placeholder, onChange }: InputFieldProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="text-sm font-semibold text-gray-700">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6c69ff] outline-none bg-white"
      />
    </div>
  );
}
