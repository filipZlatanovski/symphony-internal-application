import Button from "../Button/Button";
import CloseButton from "../CloseButton/CloseButton";
import ModalContainer from "../ModalContainer/ModalContainer";
import TypographyText from "../TypographyText/TypographyText";

interface DoubleConfirmationModal {
  isOpen: boolean;
  onClose: () => void;
  type: "organize" | "contribute" | undefined;
  openOrganizerModal: () => void;
}

export default function DoubleConfirmationModal({
  isOpen,
  onClose,
  type,
  openOrganizerModal,
}: DoubleConfirmationModal) {
  return (
    <ModalContainer open={isOpen} onClose={onClose}>
      {type === "contribute" ? (
        <>
          <CloseButton onClose={onClose} />
          <div className="pt-5">
            <TypographyText
              text={`Are you sure you want to contribute to <name's> birthday gift?`}
              variant="h6"
            />
          </div>
          <p className="text-center pt-5 pb-10">
            8/26 people have already contributed!
          </p>
          <div className="flex justify-around items-center">
            <Button
              content="Yes"
              variant="primary"
              type="submit"
              handleClick={() => {
                console.log("contribute");
              }}
            />
            <Button
              content="No"
              variant="secondary"
              type="button"
              handleClick={onClose}
            />
          </div>
        </>
      ) : (
        <>
          <CloseButton onClose={onClose} />
          <div className="pt-5">
            <TypographyText
              text={`Are you sure you want to organize <name's> birthday gift?`}
              variant="h6"
            />
          </div>
          <div className="flex justify-around items-center pt-10">
            <Button
              content="Yes"
              variant="primary"
              type="submit"
              handleClick={openOrganizerModal}
            />
            <Button
              content="No"
              variant="secondary"
              type="button"
              handleClick={onClose}
            />
          </div>
        </>
      )}
    </ModalContainer>
  );
}
