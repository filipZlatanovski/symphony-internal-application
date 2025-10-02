import { Box, IconButton, Tooltip } from "@mui/material";
import { Edit, CardGiftcard, Logout } from "@mui/icons-material";
import {
  sidebarStyles,
  iconButtonStyles,
  wishlistIconStyles,
  logoutButtonStyles,
} from "./sidebar.styles";

interface SidebarProps {
  onEditProfile: () => void;
  onWishlist: () => void;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  onEditProfile,
  onWishlist,
  onLogout,
}) => {
  return (
    <Box sx={sidebarStyles}>
      {/* Profile Icon */}
      <Tooltip title="Edit Profile" placement="right">
        <IconButton onClick={onEditProfile} sx={iconButtonStyles}>
          <Edit />
        </IconButton>
      </Tooltip>

      {/* Wishlist Icon */}
      <Tooltip title="My Wishlist" placement="right">
        <IconButton onClick={onWishlist} sx={wishlistIconStyles}>
          <CardGiftcard />
        </IconButton>
      </Tooltip>

      {/* Spacer */}
      <Box sx={{ flexGrow: 1 }} />

      {/* Logout Icon */}
      <Tooltip title="Logout" placement="right">
        <IconButton onClick={onLogout} sx={logoutButtonStyles}>
          <Logout />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default Sidebar;
