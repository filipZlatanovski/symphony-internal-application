import { Box, Modal } from "@mui/material";
import TypographyText from "../TypographyText/TypographyText";
import birthdayModalStyles from "./birthdayModal.styles";
import WishlistContent from "../WishlistContent/WishlistContent";
import BirthdayModalRightSide from "../BirthdayModalRightSide/BirthdayModalRIghtSide";
import CloseButton from "../CloseButton/CloseButton";

interface BirthdayModalProps {
  open: boolean;
  onClose: () => void;
  onOpenOrganizerModal: () => void;
  onOpenContributorDoubleCheckModal: () => void;
}

export default function BirthdayModal({
  open,
  onClose,
  onOpenOrganizerModal,
  onOpenContributorDoubleCheckModal,
}: BirthdayModalProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={birthdayModalStyles}>
        <CloseButton onClose={onClose} />
        <div className="flex flex-col md:flex-row justify-center">
          <div className="md:mr-[5rem] mb-6 md:mb-0">
            <TypographyText text="Andrej's Wishlist" variant="h4" />
            <WishlistContent />
          </div>
          <BirthdayModalRightSide
            handleContributeBirthday={onOpenContributorDoubleCheckModal}
            handleOrganizeBirthday={onOpenOrganizerModal}
          />
        </div>
      </Box>
    </Modal>
  );
}
