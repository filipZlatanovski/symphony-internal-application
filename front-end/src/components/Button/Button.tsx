import { motion } from "motion/react";
import buttonStyles from "./Button.styles";

interface ButtonProps {
  content: string;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  handleClick: () => void;
  variant?: "primary" | "secondary" | "accent" | "skip" | "disabled";
}

export default function Button({
  type,
  content,
  disabled,
  handleClick,
  variant = "primary",
}: ButtonProps) {
  return (
    <motion.button
      type={type}
      initial={{
        y: 0,
      }}
      whileHover={{
        y: -5,
        transition: { duration: 0.02 },
      }}
      className={`${buttonStyles[variant]} px-6 py-3 rounded-xl font-[Poppins] text-base font-medium transition-all`}
      disabled={disabled}
      onClick={handleClick}
    >
      {content}
    </motion.button>
  );
}
