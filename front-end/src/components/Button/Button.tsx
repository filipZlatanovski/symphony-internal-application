interface ButtonProps {
  content: string;
  type: "button" | "submit" | "reset";
  disabled: boolean;
}

export default function Button({ type, content, disabled }: ButtonProps) {
  return (
    <button
      className="bg-[rgb(108,105,255)] px-5 py-3 rounded-full font-[Poppins] text-white cursor-pointer hover:bg-[rgb(88,85,230)] transition-all"
      type={type}
      disabled={disabled}
    >
      {content}
    </button>
  );
}
