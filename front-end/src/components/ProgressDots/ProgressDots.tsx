interface ProgressDotsProps {
  step: number;
}

export default function ProgressDots({ step }: ProgressDotsProps) {
  return (
    <div className="flex justify-center gap-2 mt-8">
      <div className={`h-2 w-2 rounded-full transition-colors ${step === 1 ? "bg-[#6c69ff]" : "bg-gray-300"}`} />
      <div className={`h-2 w-2 rounded-full transition-colors ${step === 2 ? "bg-[#fe7475]" : "bg-gray-300"}`} />
    </div>
  );
}
