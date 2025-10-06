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
        <IconButton sx={profileIconButtonStyles}>
          <Edit />
        </IconButton>
        <Typography sx={sidebarTextStyles(open, isMobile)}>
          Edit Profile
        </Typography>
      </Box>
      <Box sx={iconButtonStyles} onClick={onWishlist}>
        <IconButton sx={wishlistIconStyles}>
          <CardGiftcard />
        </IconButton>
        <Typography sx={sidebarTextStyles(open, isMobile)}>
          My Wishlist
        </Typography>
      </Box>

      {/* Spacer */}
      <Box sx={{ flexGrow: 1 }} />

      {/* Logout */}
      <Box sx={iconButtonStyles} onClick={onLogout}>
        <IconButton sx={logoutButtonStyles}>
          <Logout />
        </IconButton>
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
