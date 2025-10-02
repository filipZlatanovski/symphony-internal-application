import Button from "../Button/Button";
import CloseButton from "../CloseButton/CloseButton";
import ModalContainer from "../ModalContainer/ModalContainer";
import TypographyText from "../TypographyText/TypographyText";

interface DoubleConfirmationModal {
  isOpen: boolean;
  onClose: () => void;
  type: "organize" | "contribute";
}

export default function DoubleConfirmationModal({
  isOpen,
  onClose,
  type,
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
                console.log("this will close the modal and open a drawer");
              }}
            />
            <Button
              content="No"
              variant="secondary"
              type="button"
              handleClick={() => {
                console.log("this will close the modal");
              }}
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
              handleClick={() => {
                console.log(
                  "this will close the modal and open a drawer with 2 inputs, bank details and minAmount"
                );
              }}
            />
            <Button
              content="No"
              variant="secondary"
              type="button"
              handleClick={() => {
                console.log("this will close the modal");
              }}
            />
          </div>
        </>
      )}
    </ModalContainer>
  );
}
