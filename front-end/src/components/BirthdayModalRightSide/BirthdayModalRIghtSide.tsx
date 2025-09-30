import Button from "../Button/Button";
import TypographyText from "../TypographyText/TypographyText";

interface BirthdayModalRightSide {
  handleOrganizeBirthday: () => void;
  handleContributeBirthday: () => void;
}

export default function BirthdayModalRightSide({
  handleContributeBirthday,
  handleOrganizeBirthday,
}: BirthdayModalRightSide) {
  return (
    <div>
      <TypographyText text="Organize" variant="h4" />
      <p className="text-center mb-3 font-light">
        Be the organizer of someone's birthday present.
      </p>
      {/* this whole div should be contidionally rendered based on if the specific bday has an organizer or not */}
      <div className="flex justify-center items-center mt-4 pb-7">
        <Button
          type="button"
          content="Organize"
          disabled={false}
          handleClick={handleOrganizeBirthday}
        />
      </div>
      <TypographyText text="Contribute" variant="h4" />
      <p className="text-center font-light mb-4">
        Contribute to name's birthday.
      </p>
      <div className="flex justify-center items-center mt-4">
        <Button
          type="button"
          content="Contribute"
          disabled={false}
          handleClick={handleContributeBirthday}
        />
      </div>
    </div>
  );
}
