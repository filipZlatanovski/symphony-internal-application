import LoginPage from "./components/LoginPage/LoginPage";
import LandingModal from "./components/LandingModal/LandingModal";
import Homepage from "./components/Homepage/Homepage";
import symphonyLogoImagef from "./assets/BirthdayPlanner.svg";
import { useState } from "react";
import OrganizerModal from "./components/OrganizerModal/OrganizerModal";
import { Toaster, toast } from "react-hot-toast";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showHomepage, setShowHomepage] = useState(true); // Set to true to start with homepage
  const [isOrganizerModalOpen, setIsOrganizerModalOpen] =
    useState<boolean>(false);

  const handleLoginClick = () => {
    setIsModalOpen(true);
  };
  const handleModalComplete = (data: {
    birthday?: string;
    wishlist?: string;
  }) => {
    console.log("Modal completed with data:", data);
    setIsModalOpen(false);
    setShowHomepage(true);
  };
  // Simple toggle button to switch between views
  const toggleView = () => {
    setShowHomepage(!showHomepage);
  };

  // this function will handle the submition of data from the organizer modal
  // it will also close the modals upon submition
  const handleOrganizerSubmit = () => {
    setIsOrganizerModalOpen(false);
    toast.success(
      "Congrats! You are now the organizer of <name's> birthday party!"
    );
  };

  if (showHomepage) {
    return (
      <div>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            className: "text-center font-light font-[Poppins]",
          }}
        />
        <Homepage />
        <button
          onClick={toggleView}
          className="fixed top-4 right-4 bg-[#fe7475] text-white px-4 py-2 rounded-lg z-50"
        >
          Show Login
        </button>
        {/* <button
          className="fixed top-40 right-4 bg-[#fe7475] text-white px-4 py-2 rounded-lg z-50"
          onClick={handleOpenEditProfileModal}
        >
          SHOW EDIT PROFILE MODAL
        </button> */}
        {/* <BirthdayModal
          open={isBdayModalOpen}
          onClose={handleCloseModal}
          onOpenOrganizerModal={() => {
            console.log("random text");
            setIsOrganizerModalOpen(true);
          }}
        /> */}
        <OrganizerModal
          isOpen={isOrganizerModalOpen}
          onClose={() => setIsOrganizerModalOpen(false)}
          onSubmit={handleOrganizerSubmit}
        />
      </div>
    );
  }

  return (
    <div>
      <LoginPage imageSrc={symphonyLogoImagef} onClick={handleLoginClick} />
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
