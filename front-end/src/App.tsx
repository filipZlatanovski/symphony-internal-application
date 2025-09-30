// Update the import path below if the actual file is named differently or located elsewhere
import LoginPage from "./components/LoginPage/LoginPage";
import LandingModal from "./components/LandingModal/LandingModal";
import symphonyLogoImagef from "./assets/BirthdayPlanner.svg";
import { useState } from "react";
import BirthdayModal from "./components/BirthdayModal/BirthdayModal";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLoginClick = () => {
    // For now, just open the modal when user clicks the login button
    setIsModalOpen(true);
  };

  const handleModalComplete = (data: {
    birthday?: string;
    wishlist?: string;
  }) => {
    console.log("Modal completed with data:", data);
    setIsModalOpen(false);
  };
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={handleOpenModal}>Open the modal</button>
      <BirthdayModal
        open={isOpen}
        onClose={handleCloseModal}
        handleOrganizeBirthday={() => {
          console.log("default function");
        }}
      />
      {/* <LoginPage imageSrc={symphonyLogoImagef} onClick={handleLoginClick} />
      <LandingModal open={isModalOpen} onComplete={handleModalComplete} /> */}
    </>
  );
}
