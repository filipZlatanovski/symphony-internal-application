import LoginPage from "./components/LoginPage/LoginPage";
import LandingModal from "./components/LoginPage/LandingModal";
import symphonyLogoImagef from "./assets/BirthdayPlanner.svg";
import { useState } from "react";

export default function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLoginClick = () => {
    // For now, just open the modal when user clicks the login button
    setIsModalOpen(true);
  };

  const handleModalComplete = (data: { birthday?: string; wishlist?: string }) => {
    console.log("Modal completed with data:", data);
    setIsModalOpen(false);
  };
  
  return (
    <>
      <LoginPage
        buttonText={"Google Auth button here"}
        imageSrc={symphonyLogoImagef}
      />
      <LandingModal open={isModalOpen} onComplete={handleModalComplete} />
    </>
  );
}
