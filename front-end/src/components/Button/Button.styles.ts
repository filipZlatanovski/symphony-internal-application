const base = "cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

const buttonStyles = {
  primary: `${base} bg-[#6c69ff] text-white hover:bg-[#5854e6]`,
  secondary: `${base} bg-[#fe7475] text-white hover:bg-[#e26363]`,
  accent: `${base} bg-[#ffbe3d] text-gray-900 hover:bg-[#f0b02e]`,
  skip: `${base} bg-[#f4f5fb] text-gray-700 border border-gray-300 hover:bg-gray-200`,
  disabled: `${base} bg-gray-500`,
};

export default buttonStyles;
