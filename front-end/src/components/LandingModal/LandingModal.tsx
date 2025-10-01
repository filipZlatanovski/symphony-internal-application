import { useState } from "react";
import ModalContainer from "../ModalContainer/ModalContainer";
import LandingStepBirthday from "./LandingStepBirthday";
import LandingStepWishlist from "./LandingStepWishlist";
import ProgressDots from "../ProgressDots/ProgressDots";

interface LandingModalProps {
  open: boolean;
  onComplete: (data: { birthday?: string; wishlist?: string }) => void;
}

export default function LandingModal({ open, onComplete }: LandingModalProps) {
  const [step, setStep] = useState(1);
  const [birthday, setBirthday] = useState("");
  const [wishlist, setWishlist] = useState("");

  const handleNext = () => setStep(2);
  const handleSkipBirthday = () => { setBirthday(""); setStep(2); };
  const handleComplete = () => onComplete({ birthday, wishlist });
  const handleSkipWishlist = () => onComplete({ birthday, wishlist: "" });

  return (
    <ModalContainer open={open}>
      {step === 1 ? (
        <LandingStepBirthday
          birthday={birthday}
          onChange={setBirthday}
          onSkip={handleSkipBirthday}
          onNext={handleNext}
        />
      ) : (
        <LandingStepWishlist
          wishlist={wishlist}
          onChange={setWishlist}
          onSkip={handleSkipWishlist}
          onComplete={handleComplete}
        />
      )}
      <ProgressDots step={step} />
    </ModalContainer>
  );
}
