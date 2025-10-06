import {
  Box,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import MonthSection from "../MonthSection/MonthSection";
import OrganizerModal from "../OrganizerModal/OrganizerModal";
import DoubleConfirmationModal from "../DoubleConfirmationModal/DoubleConfirmationModal";
import { toast, Toaster } from "react-hot-toast";
import {
  monthSectionStyles,
  containerStatsStyles,
  typographyTextStyles,
  hompageBoxContainerStyles,
  homepageFirstBoxStyles,
  hamburgerButtonStyles,
} from "./homepage.styles";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import WishlistDrawer from "../WishlistDrawer/WishlistDrawer";
import { Close } from "@mui/icons-material";

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
  const [sidebarOpen, setSidebarOpen] = useState(false);
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

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
          isMobile={isMobile}
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
          isMobile={isMobile}
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
          isMobile={isMobile}
          anchor="right"
          isOpen={drawerVisible}
          onClose={handleDrawerVisible}
        />
      )}
      <Box sx={homepageFirstBoxStyles}>
        {isMobile && (
          <IconButton
            onClick={() => setSidebarOpen(!sidebarOpen)}
            sx={hamburgerButtonStyles}
          >
            {isMobile && sidebarOpen ? <Close /> : <MenuIcon />}
          </IconButton>
        )}
        <Sidebar
          open={sidebarOpen}
          isMobile={isMobile}
          setOpen={setSidebarOpen}
          onLogout={() => console.log("Logout")}
          onEditProfile={handleEditProfileModal}
          onWishlist={() => console.log("Wishlist")}
        />
        <Box component="main" sx={hompageBoxContainerStyles(sidebarOpen)}>
          <Container maxWidth={false} sx={containerStatsStyles}>
            <Typography variant="h3" sx={typographyTextStyles}>
              Welcome back, name!
            </Typography>
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
