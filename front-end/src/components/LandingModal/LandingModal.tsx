import { useState } from 'react';

interface LandingModalProps {
  open: boolean;
  onComplete: (data: { birthday?: string; wishlist?: string }) => void;
}

const LandingModal: React.FC<LandingModalProps> = ({ open, onComplete }) => {
  const [step, setStep] = useState(1);
  const [birthday, setBirthday] = useState('');
  const [wishlist, setWishlist] = useState('');

  if (!open) return null;

  const handleNext = () => setStep(2);
  const handleSkipBirthday = () => { setBirthday(''); setStep(2); };
  const handleComplete = () => onComplete({ birthday, wishlist });
  const handleSkipWishlist = () => onComplete({ birthday, wishlist: '' });

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-[#f4f5fb] rounded-xl p-10 sm:max-w-[480px] w-full mx-4">
        {step === 1 ? (
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-900 mb-3 font-[Poppins]">
              Add Your Birthday
            </h2>
            <p className="text-gray-600 mb-8 font-[Poppins]">
              When is your special day? This helps your team celebrate you!
            </p>
            
            <div className="text-left mb-6">
              <label htmlFor="birthday" className="block text-sm font-medium text-gray-700 mb-2 font-[Poppins]">
                Birthday
              </label>
              <input
                id="birthday"
                type="date"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                className="w-full bg-white border border-gray-300 focus:border-[#6c69ff] focus:ring-[#6c69ff] rounded-xl h-12 px-3 font-[Poppins] focus:outline-none focus:ring-2"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleSkipBirthday}
                className="flex-1 bg-white text-gray-700 hover:bg-gray-100 rounded-xl h-12 font-[Poppins] font-medium border border-gray-200 transition-all"
              >
                Skip
              </button>
              <button
                onClick={handleNext}
                disabled={!birthday}
                className="flex-1 bg-[#6c69ff] hover:bg-[#5854e6] text-white rounded-xl h-12 font-[Poppins] font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                Next
              </button>
            </div>
          </div>
        ) : (
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
                onChange={(e) => setWishlist(e.target.value)}
                placeholder="Share ideas to help your colleagues choose the perfect gift..."
                className="w-full bg-white border border-gray-300 focus:border-[#fe7475] focus:ring-[#fe7475] rounded-xl h-32 px-3 py-2 font-[Poppins] resize-none focus:outline-none focus:ring-2"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleSkipWishlist}
                className="flex-1 bg-white text-gray-700 hover:bg-gray-100 rounded-xl h-12 font-[Poppins] font-medium border border-gray-200 transition-all"
              >
                Skip
              </button>
              <button
                onClick={handleComplete}
                className="flex-1 bg-[#ffbe3d] hover:bg-[#f0b02e] text-gray-900 rounded-xl h-12 font-[Poppins] font-medium transition-all"
              >
                Complete Setup
              </button>
            </div>
          </div>
        )}

        <div className="flex justify-center gap-2 mt-8">
          <div className={`h-2 w-2 rounded-full transition-colors ${step === 1 ? 'bg-[#6c69ff]' : 'bg-gray-300'}`} />
          <div className={`h-2 w-2 rounded-full transition-colors ${step === 2 ? 'bg-[#fe7475]' : 'bg-gray-300'}`} />
        </div>
      </div>
    </div>
  );
};

export default LandingModal;