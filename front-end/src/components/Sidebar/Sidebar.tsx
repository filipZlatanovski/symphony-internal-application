import { Box, IconButton, Typography, Drawer } from "@mui/material";
import { Edit, CardGiftcard, Logout, Menu, Close } from "@mui/icons-material";
import {
  sidebarBoxStyles,
  profileIconStyles,
  profileIconButtonStyles,
  sidebarTextStyles,
  iconButtonStyles,
  wishlistIconStyles,
  logoutButtonStyles,
} from "./sidebar.styles";
import Tooltip from "../Tooltip/Tooltip";

interface SidebarProps {
  open: boolean;
  isMobile: boolean;
  setOpen: (open: boolean) => void;
  onEditProfile: () => void;
  onWishlist: () => void;
  onLogout: () => void;
}

export default function Sidebar({
  open,
  isMobile,
  setOpen,
  onEditProfile,
  onWishlist,
  onLogout,
}: SidebarProps) {
  const sidebarContent = (
    <Box sx={sidebarBoxStyles(open, isMobile)}>
      <IconButton
        onClick={() => setOpen(!open)}
        sx={{ mb: 4, alignSelf: open ? "flex-end" : "center" }}
      >
        {open && isMobile ? null : open ? <Close /> : <Menu />}
      </IconButton>
      <Box sx={profileIconStyles} onClick={onEditProfile}>
        <Tooltip title="Edit Profile" placement="right" arrow>
          <IconButton sx={profileIconButtonStyles}>
            <Edit />
          </IconButton>
        </Tooltip>
        <Typography sx={sidebarTextStyles(open, isMobile)}>
          Edit Profile
        </Typography>
      </Box>
      <Box sx={iconButtonStyles} onClick={onWishlist}>
        <Tooltip title="My Wishlist" placement="right" arrow>
          <IconButton sx={wishlistIconStyles}>
            <CardGiftcard />
          </IconButton>
        </Tooltip>
        <Typography sx={sidebarTextStyles(open, isMobile)}>
          My Wishlist
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={iconButtonStyles} onClick={onLogout}>
        <Tooltip title="Log Out" placement="right" arrow>
          <IconButton sx={logoutButtonStyles}>
            <Logout />
          </IconButton>
        </Tooltip>
        <Typography sx={sidebarTextStyles(open, isMobile)}>Logout</Typography>
      </Box>
    </Box>
  );

  if (isMobile) {
    return (
      <>
        <Drawer
          anchor="bottom"
          open={open}
          onClose={() => setOpen(false)}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {sidebarContent}
        </Drawer>
      </>
    );
  }

  return <Box sx={sidebarBoxStyles(open, isMobile)}>{sidebarContent}</Box>;
}
