import { motion } from "motion/react";

interface ButtonProps {
  content: string;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  handleClick: () => void;
}

export default function Button({
  type,
  content,
  disabled,
  handleClick,
}: ButtonProps) {
  return (
    <motion.button
      initial={{
        y: 0,
      }}
      whileHover={{
        y: -5,
        transition: { duration: 0.02 },
      }}
      className="bg-[rgb(108,105,255)] px-5 py-3 rounded-full font-[Poppins] text-white cursor-pointer hover:bg-[rgb(88,85,230)] transition-all"
      type={type}
      disabled={disabled}
      onClick={handleClick}
    >
      {content}
    </motion.button>
  );
}
