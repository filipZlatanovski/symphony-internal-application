interface LoginPageProps {
  imageSrc: string;
  imageAlt?: string;
  buttonText: string;
  onClick?: () => void;
}

export default function LoginPage({
  imageSrc,
  buttonText,
  imageAlt,
  onClick,
}: LoginPageProps) {
  return (
    <div className="flex justify-center items-center h-[100vh] flex-col">
      <img className="pb-5 w-100" src={imageSrc} alt={imageAlt} />
      <button onClick={onClick} className="text-white bg-purple-500 p-3 rounded-2xl text-[1rem] font-[Poppins] font-[] hover:bg-purple-400 transition-all cursor-pointer">
        {buttonText}
      </button>
    </div>
  );
}
