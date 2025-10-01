import { Box, Avatar, IconButton, Tooltip } from "@mui/material";
import { Edit, CardGiftcard, Logout } from "@mui/icons-material";

interface SidebarProps {
  onEditProfile: () => void;
  onWishlist: () => void;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onEditProfile, onWishlist, onLogout }) => {
  return (
    <Box
      sx={{
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
        width: { xs: 72, sm: 96 },
        bgcolor: "#fff",
        borderRight: "1px solid #eee",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 3,
        px: 1,
        zIndex: 1000,
      }}
    >
      

      {/* Profile Icon */}
      <Tooltip title="Edit Profile" placement="right">
        <IconButton
          onClick={onEditProfile}
          sx={{
            mb: 3,
            bgcolor: "#6c69ff",
            color: "#fff",
            width: { xs: 48, sm: 64 },
            height: { xs: 48, sm: 64 },
            "&:hover": { bgcolor: "#6c69ff" },
          }}
        >
          <Edit />
        </IconButton>
      </Tooltip>

      {/* Wishlist Icon */}
      <Tooltip title="My Wishlist" placement="right">
        <IconButton
          onClick={onWishlist}
          sx={{
            mb: 3,
            bgcolor: "#ffbe3d",
            color: "#000",
            width: { xs: 48, sm: 64 },
            height: { xs: 48, sm: 64 },
            "&:hover": { bgcolor: "#f0b02e" },
          }}
        >
          <CardGiftcard />
        </IconButton>
      </Tooltip>

      {/* Spacer */}
      <Box sx={{ flexGrow: 1 }} />

      {/* Logout Icon */}
      <Tooltip title="Logout" placement="right">
        <IconButton
          onClick={onLogout}
          sx={{
            mb: 3,
            bgcolor: "#f4f5fb",
            color: "#ff4d4d",
            width: { xs: 48, sm: 64 },
            height: { xs: 48, sm: 64 },
            "&:hover": { bgcolor: "#fce4e4" },
          }}
        >
          <Logout />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default Sidebar;
