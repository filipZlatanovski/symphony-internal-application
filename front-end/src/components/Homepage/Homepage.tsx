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
      { id: 2, name: "John", lastName: "Doe", daysLeft: 13 },
      { id: 3, name: "John", lastName: "Doe", daysLeft: 15 },
      { id: 4, name: "John", lastName: "Doe", daysLeft: 18 },
    ],
  },
  {
    month: "November 2025",
    birthdays: [
      { id: 5, name: "Sarah", lastName: "Smith", daysLeft: 22 },
      { id: 6, name: "Jane", lastName: "Johnson", daysLeft: 26 },
      { id: 7, name: "Pam", lastName: "Beasly", daysLeft: 36 },
      { id: 8, name: "Lila", lastName: "Slay", daysLeft: 77 },
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
  // This will change once the DB data kicks in, it will be a string[]
  const [contributedBirthdayIds, setContributedBirthdayIds] = useState<
    number[]
  >([]);
  // This aswell, string only
  const [activeBirtdayId, setActiveBirthdayId] = useState<number | null>(3);
  const [organizedBirthdayIds, setOrganizedBirthdayIds] = useState<number[]>(
    []
  );

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

  const handleDoubleConfirmationModal = (
    type: "contribute" | "organize",
    // This should change to string once real data gets involved
    id?: number
  ) => {
    setConfirmationType(type);
    setActiveBirthdayId(Number(id));
    setIsDoubleConfirmationModalOpen((prevState) => !prevState);
  };

  const handeDoubleConfirmationModalClose = () => {
    setConfirmationType(undefined);
    setIsDoubleConfirmationModalOpen((prevState) => !prevState);
  };

  const confirmBirthdayOrganization = () => {
    if (activeBirtdayId && !organizedBirthdayIds.includes(activeBirtdayId)) {
      setOrganizedBirthdayIds((prev) => [...prev, Number(activeBirtdayId)]);
    }

    setIsOrganizerModalOpen(false);
    setIsDoubleConfirmationModalOpen(false);
    setConfirmationType(undefined);
    setActiveBirthdayId(null);
    toast.success(`You are now the organizer of <name's> birthday!`);
  };

  const confirmBirthdayContribution = () => {
    if (activeBirtdayId && !contributedBirthdayIds.includes(activeBirtdayId)) {
      setContributedBirthdayIds((prev) => [...prev, activeBirtdayId]);
    }
    setIsDoubleConfirmationModalOpen((prevState) => !prevState);
    setConfirmationType(undefined);
    setActiveBirthdayId(null);
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
            confirmBirthdayOrganization();
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
          isMobile={isMobile}
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
                    handleDoubleConfirmationModal(
                      "contribute",
                      Number(activeBirtdayId)
                    );
                  }}
                  onOrganizeButtonClick={() => {
                    handleDoubleConfirmationModal(
                      "organize",
                      Number(activeBirtdayId)
                    );
                  }}
                  onWishlistButtonClick={handleDrawerVisible}
                  contributorDisabledIds={contributedBirthdayIds}
                  organizerDisabledIds={organizedBirthdayIds}
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
