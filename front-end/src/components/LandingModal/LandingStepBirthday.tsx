import InputField from "../InputField/InputField";
import Button from "../Button/Button";

interface LandingStepBirthdayProps {
  birthday: string;
  onChange: (val: string) => void;
  onSkip: () => void;
  onNext: () => void;
}

export default function LandingStepBirthday({ birthday, onChange, onSkip, onNext }: LandingStepBirthdayProps) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-semibold text-gray-900 mb-3 font-[Poppins]">
        Add Your Birthday
      </h2>
      <p className="text-gray-600 mb-8 font-[Poppins]">
        When is your special day? This helps your team celebrate you!
      </p>

      <div className="text-left mb-6">
        <InputField
          type="date"
          label="Birthday"
          placeholder=""
          htmlFor="birthday"
          htmlId="birthday"
          value={birthday}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>

      <div className="flex gap-3">
        <Button type="button" content="Skip" handleClick={onSkip} />
        <Button type="button" content="Next" handleClick={onNext} disabled={!birthday} />
      </div>
    </div>
  );
}
