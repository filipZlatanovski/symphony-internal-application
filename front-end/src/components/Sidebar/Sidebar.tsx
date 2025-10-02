import { Box, IconButton, Typography } from "@mui/material";
import { Edit, CardGiftcard, Logout, Menu } from "@mui/icons-material";

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  onEditProfile: () => void;
  onWishlist: () => void;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, setOpen, onEditProfile, onWishlist, onLogout }) => {
  return (
    <Box
      sx={{
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
        width: open ? 260 : 90, // expanded vs collapsed
        bgcolor: "#fff",
        borderRight: "1px solid #eee",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        py: 3,
        px: 2,
        zIndex: 1000,
        transition: "width 0.25s ease",
      }}
    >
      {/* Toggle button */}
      <IconButton onClick={() => setOpen(!open)} sx={{ mb: 4, alignSelf: open ? "flex-end" : "center" }}>
        <Menu />
      </IconButton>

      {/* Profile */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 3,
          cursor: "pointer",
          width: "100%",
        }}
        onClick={onEditProfile}
      >
        <IconButton
          sx={{
            bgcolor: "#6c69ff",
            color: "#fff",
            width: 56,
            height: 56,
            "&:hover": { bgcolor: "#6c69ff" },
          }}
        >
          <Edit />
        </IconButton>
        <Typography
          sx={{
            ml: 2,
            fontWeight: 500,
            fontFamily: "Poppins, sans-serif",
            whiteSpace: "nowrap",
            overflow: "hidden",
            opacity: open ? 1 : 0,
            maxWidth: open ? 200 : 0,
            transition: "all 0.2s ease",
          }}
        >
          Edit Profile
        </Typography>
      </Box>

      {/* Wishlist */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 3,
          cursor: "pointer",
          width: "100%",
        }}
        onClick={onWishlist}
      >
        <IconButton
          sx={{
            bgcolor: "#ffbe3d",
            color: "#000",
            width: 56,
            height: 56,
            "&:hover": { bgcolor: "#f0b02e" },
          }}
        >
          <CardGiftcard />
        </IconButton>
        <Typography
          sx={{
            ml: 2,
            fontWeight: 500,
            fontFamily: "Poppins, sans-serif",
            whiteSpace: "nowrap",
            overflow: "hidden",
            opacity: open ? 1 : 0,
            maxWidth: open ? 200 : 0,
            transition: "all 0.2s ease",
          }}
        >
          My Wishlist
        </Typography>
      </Box>

      {/* Spacer */}
      <Box sx={{ flexGrow: 1 }} />

      {/* Logout */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 3,
          cursor: "pointer",
          width: "100%",
        }}
        onClick={onLogout}
      >
        <IconButton
          sx={{
            bgcolor: "#f4f5fb",
            color: "#ff4d4d",
            width: 56,
            height: 56,
            "&:hover": { bgcolor: "#fce4e4" },
          }}
        >
          <Logout />
        </IconButton>
        <Typography
          sx={{
            ml: 2,
            fontWeight: 500,
            fontFamily: "Poppins, sans-serif",
            whiteSpace: "nowrap",
            overflow: "hidden",
            opacity: open ? 1 : 0,
            maxWidth: open ? 200 : 0,
            transition: "all 0.2s ease",
          }}
        >
          Logout
        </Typography>
      </Box>
    </Box>
  );
};

export default Sidebar;
