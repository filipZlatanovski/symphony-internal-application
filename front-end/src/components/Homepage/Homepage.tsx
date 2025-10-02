import { Box, Container, IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import StatsCard from "../StatsCard/StatsCard";
import MonthSection from "../MonthSection/MonthSection";
import BirthdayModal from "../BirthdayModal/BirthdayModal";
import OrganizerModal from "../OrganizerModal/OrganizerModal";
import DoubleConfirmationModal from "../DoubleConfirmationModal/DoubleConfirmationModal";
import { toast, Toaster } from "react-hot-toast";
import {
  iconButtonStyles,
  mainCardStyles,
  monthSectionStyles,
  statsStyles,
} from "./homepage.styles";
import TypographyText from "../TypographyText/TypographyText";

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

const STATS = [
  { label: "Upcoming Birthdays", value: 3, sublabel: "Next 30 days" },
  {
    label: "Active Celebrations",
    value: 2,
    sublabel: "You're contributing to",
  },
  { label: "Team Members", value: 24, sublabel: "In your circle" },
];

const Homepage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isBirthdayModalOpen, setIsBirthdayModalOpen] =
    useState<boolean>(false);
  const [selectedBirthday, setSelectedBirthday] = useState<number | null>(null);
  const [isOrganizerModalOpen, setIsOrganizerModalOpen] =
    useState<boolean>(false);
  const [isDoubleConfirmationModalOpen, setIsDoubleConfirmationModalOpen] =
    useState<boolean>(false);
  const [confirmationType, setConfirmationType] = useState<
    "contribute" | "organize" | undefined
  >(undefined);

  const handleOrganizerModalOpen = () => {
    setIsOrganizerModalOpen(true);
  };

  // this function will handle the submition of data from the organizer modal
  // it will also close the modals upon submition
  const handleOrganizerModalClose = () => {
    setIsOrganizerModalOpen(false);
  };

  const handleBirthdayModalClose = () => {
    setSelectedBirthday(null);
    setIsBirthdayModalOpen(false);
  };

  const closeAllModals = () => {
    setIsOrganizerModalOpen(false);
    setIsBirthdayModalOpen(false);
    setIsDoubleConfirmationModalOpen(false);
  };

  const handleDoubleConfirmationModalOpen = (
    type: "contribute" | "organize"
  ) => {
    setConfirmationType(type);
    setIsDoubleConfirmationModalOpen(true);
  };

  const handeDoubleConfirmationModalClose = () => {
    setConfirmationType(undefined);
    setIsDoubleConfirmationModalOpen(false);
  };

  const confirmBirthdayContribution = () => {
    setIsDoubleConfirmationModalOpen(false);
    toast.success(`You are contributing to <name's> birthday gift!`);
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
      {isBirthdayModalOpen && selectedBirthday && (
        <BirthdayModal
          open={isBirthdayModalOpen}
          onClose={handleBirthdayModalClose}
          onOpenOrganizerModal={() => {
            handleDoubleConfirmationModalOpen("organize");
          }}
          onOpenContributorDoubleCheckModal={() => {
            handleDoubleConfirmationModalOpen("contribute");
          }}
        />
      )}
      {isOrganizerModalOpen && (
        <OrganizerModal
          isOpen={isOrganizerModalOpen}
          onClose={handleOrganizerModalClose}
          onSubmit={() => {
            console.log("data sumbiting from organzier modal");
            handleOrganizerModalClose();
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
          openOrganizerModal={handleOrganizerModalOpen}
          confirmContribution={confirmBirthdayContribution}
        />
      )}
      <Box sx={mainCardStyles}>
        <Sidebar
          onLogout={() => console.log("Logout")}
          onEditProfile={() => console.log("Edit Profile")}
          onWishlist={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 4,
            ml: sidebarOpen ? "100px" : 0,
            transition: "margin-left 0.3s ease-in-out",
            width: sidebarOpen ? "calc(100% - 10px)" : "100%",
          }}
        >
          {!sidebarOpen && (
            <IconButton
              onClick={() => setSidebarOpen(true)}
              sx={iconButtonStyles}
            >
              <Menu />
            </IconButton>
          )}
          <Container
            maxWidth={false}
            sx={{ maxWidth: "none !important", px: { xs: 2, sm: 3, md: 4 } }}
          >
            <TypographyText variant="h3" text="Welcome back <name>" />
            {/* CSS Grid for stats */}
            <Box sx={statsStyles}>
              {STATS.map((s, i) => (
                <StatsCard key={i} {...s} />
              ))}
            </Box>
            {/* Simple Box for month sections */}
            <Box sx={monthSectionStyles}>
              {BIRTHDAYS_BY_MONTH.map((m, i) => (
                <MonthSection
                  key={i}
                  month={m.month}
                  birthdays={m.birthdays}
                  onContributeButtonClick={() => {
                    handleDoubleConfirmationModalOpen("contribute");
                  }}
                  onOrganizeButtonClick={() => {
                    handleDoubleConfirmationModalOpen("organize");
                  }}
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
