interface LoginPageProps {
  imageSrc: string;
  imageAlt?: string;
  buttonText: string;
}

export default function LoginPage({
  imageSrc,
  buttonText,
  imageAlt,
}: LoginPageProps) {
  return (
    <div className="flex justify-center items-center h-[100vh] flex-col">
      <img className="w-120 pb-5" src={imageSrc} alt={imageAlt} />
      <button className="text-white bg-purple-500 p-3 rounded-2xl text-xl font-[Poppins] font-[300] hover:bg-purple-400 transition-all cursor-pointer">
        {buttonText}
      </button>
    </div>
  );
}
