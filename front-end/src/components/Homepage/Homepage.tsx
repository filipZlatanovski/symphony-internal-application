import { Box, Container } from "@mui/material";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import MonthSection from "../MonthSection/MonthSection";
//import StatsCard from "../StatsCard/StatsCard";
// import BirthdayModal from "../BirthdayModal/BirthdayModal";
import OrganizerModal from "../OrganizerModal/OrganizerModal";
import DoubleConfirmationModal from "../DoubleConfirmationModal/DoubleConfirmationModal";
import { toast, Toaster } from "react-hot-toast";
import { monthSectionStyles, containerStatsStyles } from "./homepage.styles";
import TypographyText from "../TypographyText/TypographyText";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import WishlistDrawer from "../WishlistDrawer/WishlistDrawer";

const BIRTHDAYS_BY_MONTH = [
  {
    month: "October 2025",
    birthdays: [
      { id: 1, name: "John", lastName: "Doe", daysLeft: 8 },
      { id: 1, name: "John", lastName: "Doe", daysLeft: 13 },
      { id: 1, name: "John", lastName: "Doe", daysLeft: 15 },
      { id: 1, name: "John", lastName: "Doe", daysLeft: 18 },
    ],
  },
  {
    month: "November 2025",
    birthdays: [
      { id: 2, name: "Sarah", lastName: "Smith", daysLeft: 22 },
      { id: 3, name: "Jane", lastName: "Johnson", daysLeft: 26 },
      { id: 4, name: "Pam", lastName: "Beasly", daysLeft: 36 },
      { id: 5, name: "Lila", lastName: "Slay", daysLeft: 77 },
    ],
  },
];

// const STATS = [
//   { label: "Upcoming Birthdays", value: 3, sublabel: "Next 30 days" },
//   {
//     label: "Active Celebrations",
//     value: 2,
//     sublabel: "You're contributing to",
//   },
//   { label: "Team Members", value: 24, sublabel: "In your circle" },
// ];

const Homepage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  // const [isBirthdayModalOpen, setIsBirthdayModalOpen] =
  //   useState<boolean>(false);
  const [isOrganizerModalOpen, setIsOrganizerModalOpen] =
    useState<boolean>(false);
  const [isDoubleConfirmationModalOpen, setIsDoubleConfirmationModalOpen] =
    useState<boolean>(false);
  const [confirmationType, setConfirmationType] = useState<
    "contribute" | "organize" | undefined
  >(undefined);
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] =
    useState<boolean>(false);
  const [drawerVisible, setDrawerVisible] = useState<boolean>(false);

  const handleDrawerVisible = () => {
    setDrawerVisible((prevState) => !prevState);
  };

  // this function will handle the submition of data from the organizer modal
  // it will also close the modals upon submition
  const handleOrganizerModal = () => {
    setIsOrganizerModalOpen((prevState) => !prevState);
  };

  const closeAllModals = () => {
    setIsOrganizerModalOpen((prevState) => !prevState);
    setIsDoubleConfirmationModalOpen((prevState) => !prevState);
  };

  const handleDoubleConfirmationModal = (type: "contribute" | "organize") => {
    setConfirmationType(type);
    setIsDoubleConfirmationModalOpen((prevState) => !prevState);
  };

  const handeDoubleConfirmationModalClose = () => {
    setConfirmationType(undefined);
    setIsDoubleConfirmationModalOpen((prevState) => !prevState);
  };

  const confirmBirthdayContribution = () => {
    setIsDoubleConfirmationModalOpen((prevState) => !prevState);
    toast.success(`You are contributing to <name's> birthday gift!`);
  };

  const handleEditProfileModal = () => {
    setIsEditProfileModalOpen((prevState) => !prevState);
  };

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          className: "text-center font-light font-[Poppins]",
        }}
      />
      {isOrganizerModalOpen && (
        <OrganizerModal
          isOpen={isOrganizerModalOpen}
          onClose={() => {
            closeAllModals();
          }}
          onSubmit={() => {
            console.log("data sumbiting from organzier modal");
            closeAllModals();
            toast.success(`You are now the organizer of <name's> birthday!`);
          }}
        />
      )}
      {isDoubleConfirmationModalOpen && (
        <DoubleConfirmationModal
          isOpen={isDoubleConfirmationModalOpen}
          onClose={handeDoubleConfirmationModalClose}
          type={confirmationType}
          openOrganizerModal={handleOrganizerModal}
          confirmContribution={confirmBirthdayContribution}
        />
      )}
      {isEditProfileModalOpen && (
        <EditProfileModal
          isOpen={isEditProfileModalOpen}
          onClose={handleEditProfileModal}
          onSubmit={() => {
            handleEditProfileModal();
            toast.success("Changes made successfully!");
          }}
        />
      )}
      {drawerVisible && (
        <WishlistDrawer
          anchor="right"
          isOpen={drawerVisible}
          onClose={handleDrawerVisible}
        />
      )}
      <Box
        sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#f4f5fb" }}
      >
        <Sidebar
          open={sidebarOpen}
          setOpen={setSidebarOpen}
          onLogout={() => console.log("Logout")}
          onEditProfile={handleEditProfileModal}
          onWishlist={() => console.log("Wishlist")}
        />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 4,
            ml: sidebarOpen ? "260px" : "90px",
            transition: "margin-left 0.4s ease-in-out",
          }}
        >
          <Container maxWidth={false} sx={containerStatsStyles}>
            <TypographyText variant="h3" text="Welcome back, <name>!" />
            {/* CSS Grid for stats
            <Box sx={statsStyles}>
              {STATS.map((s, i) => (
                <StatsCard key={i} {...s} />
              ))}
            </Box> */}
            {/* Simple Box for month sections */}
            <Box sx={monthSectionStyles}>
              {BIRTHDAYS_BY_MONTH.map((m, i) => (
                <MonthSection
                  key={i}
                  month={m.month}
                  birthdays={m.birthdays}
                  onContributeButtonClick={() => {
                    handleDoubleConfirmationModal("contribute");
                  }}
                  onOrganizeButtonClick={() => {
                    handleDoubleConfirmationModal("organize");
                  }}
                  onWishlistButtonClick={handleDrawerVisible}
                />
              ))}
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Homepage;
