import Button from "../Button/Button";

interface LandingStepWishlistProps {
  wishlist: string;
  onChange: (val: string) => void;
  onSkip: () => void;
  onComplete: () => void;
}

export default function LandingStepWishlist({ wishlist, onChange, onSkip, onComplete }: LandingStepWishlistProps) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-semibold text-gray-900 mb-3 font-[Poppins]">
        Create Your Wishlist
      </h2>
      <p className="text-gray-600 mb-8 font-[Poppins]">
        What would make your birthday special? Share your gift ideas.
      </p>

      <div className="text-left mb-6">
        <label htmlFor="wishlist" className="block text-sm font-medium text-gray-700 mb-2 font-[Poppins]">
          Gift Ideas <span className="text-gray-400">(Optional)</span>
        </label>
        <textarea
          id="wishlist"
          value={wishlist}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Share ideas to help your colleagues choose the perfect gift..."
          className="w-full bg-white border border-gray-300 focus:border-[#fe7475] focus:ring-[#fe7475] rounded-xl h-32 px-3 py-2 font-[Poppins] resize-none focus:outline-none focus:ring-2"
        />
      </div>

      <div className="flex gap-3">
        <Button type="button" content="Skip" handleClick={onSkip} />
        <Button type="button" content="Complete Setup" handleClick={onComplete} />
      </div>
    </div>
  );
}
