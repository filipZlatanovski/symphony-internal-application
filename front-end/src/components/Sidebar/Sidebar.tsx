import { Box, IconButton, Typography } from "@mui/material";
import { Edit, CardGiftcard, Logout, Menu } from "@mui/icons-material";
import {
  sidebarBoxStyles,
  profileIconStyles,
  profileIconButtonStyles,
  sidebarTextStyles,
  iconButtonStyles,
  wishlistIconStyles,
  logoutButtonStyles,
} from "./sidebar.styles";

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  onEditProfile: () => void;
  onWishlist: () => void;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  open,
  setOpen,
  onEditProfile,
  onWishlist,
  onLogout,
}) => {
  return (
    <Box sx={sidebarBoxStyles(open)}>
      {/* Toggle button */}
      <IconButton
        onClick={() => setOpen(!open)}
        sx={{ mb: 4, alignSelf: open ? "flex-end" : "center" }}
      >
        <Menu />
      </IconButton>

      {/* Profile */}
      <Box sx={profileIconStyles} onClick={onEditProfile}>
        <IconButton sx={profileIconButtonStyles}>
          <Edit />
        </IconButton>
        <Typography sx={sidebarTextStyles(open)}>Edit Profile</Typography>
      </Box>

      {/* Wishlist */}
      <Box sx={iconButtonStyles} onClick={onWishlist}>
        <IconButton sx={wishlistIconStyles}>
          <CardGiftcard />
        </IconButton>
        <Typography sx={sidebarTextStyles(open)}>My Wishlist</Typography>
      </Box>

      {/* Spacer */}
      <Box sx={{ flexGrow: 1 }} />

      {/* Logout */}
      <Box sx={iconButtonStyles} onClick={onLogout}>
        <IconButton sx={logoutButtonStyles}>
          <Logout />
        </IconButton>
        <Typography sx={sidebarTextStyles(open)}>Logout</Typography>
      </Box>
    </Box>
  );
};

export default Sidebar;
