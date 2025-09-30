import LoginPage from "./components/LoginPage/LoginPage";
import LandingModal from "./components/LandingModal/LandingModal";
import Homepage from "./components/Homepage/Homepage";
import symphonyLogoImagef from "./assets/BirthdayPlanner.svg";
import { useState } from "react";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showHomepage, setShowHomepage] = useState(true); // Set to true to start with homepage

  const handleLoginClick = () => {
    setIsModalOpen(true);
  };

  const handleModalComplete = (data: { birthday?: string; wishlist?: string }) => {
    console.log("Modal completed with data:", data);
    setIsModalOpen(false);
    setShowHomepage(true);
  };

  // Simple toggle button to switch between views
  const toggleView = () => {
    setShowHomepage(!showHomepage);
  };

  if (showHomepage) {
    return (
      <div>
        <Homepage />
        <button 
          onClick={toggleView}
          className="fixed top-4 right-4 bg-[#fe7475] text-white px-4 py-2 rounded-lg z-50"
        >
          Show Login
        </button>
      </div>
    );
  }
  
  return (
    <div>
      <LoginPage
        buttonText={"Google Auth button here"}
        imageSrc={symphonyLogoImagef}
        onClick={handleLoginClick} 
      />
      <LandingModal open={isModalOpen} onComplete={handleModalComplete} />
      <button 
        onClick={toggleView}
        className="fixed top-4 right-4 bg-[#6c69ff] text-white px-4 py-2 rounded-lg z-50"
      >
        Show Homepage
      </button>
    </div>
  );
}