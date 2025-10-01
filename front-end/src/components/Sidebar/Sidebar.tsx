import {
  Drawer,
  Box,
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography,
} from "@mui/material";
import { Close, Edit, CardGiftcard, Settings, Logout } from "@mui/icons-material";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  onLogout: () => void;
  onEditProfile: () => void;
}

const menuItems = [
  { icon: <Edit />, text: "Edit Profile", color: "#6c69ff" },
  { icon: <CardGiftcard />, text: "My Wishlist", color: "#fe7475" },
  { icon: <Settings />, text: "Settings", color: "#ffbe3d" },
];

const Sidebar: React.FC<SidebarProps> = ({ open, onClose, onLogout, onEditProfile }) => {
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      sx={{
        width: 320,
        "& .MuiDrawer-paper": {
          width: 320,
          boxSizing: "border-box",
          borderRadius: "0 16px 16px 0",
          padding: 2,
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #eee",
          pb: 2,
          mb: 2,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold", fontFamily: "Poppins, sans-serif" }}>
          Profile
        </Typography>
        <IconButton onClick={onClose}>
          <Close />
        </IconButton>
      </Box>

      {/* User Info */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 3, px: 1 }}>
        <Avatar sx={{ bgcolor: "#6c69ff", width: 64, height: 64, mr: 2 }}>AJ</Avatar>
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            Alex Johnson
          </Typography>
          <Typography variant="body2" color="text.secondary">
            alex.j@company.com
          </Typography>
        </Box>
      </Box>

      {/* Menu Items */}
      <List sx={{ flexGrow: 1 }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              onClick={item.text === "Edit Profile" ? onEditProfile : undefined}
              sx={{
                borderRadius: "12px",
                mb: 1,
                "&:hover": {
                  backgroundColor: `${item.color}15`, // subtle tint
                  transform: "translateX(4px)",
                  transition: "all 0.2s ease-in-out",
                },
              }}
            >
              <ListItemIcon sx={{ color: item.color }}>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 500,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* Logout Button */}
      <Box sx={{ mt: "auto", px: 1 }}>
        <ListItem disablePadding>
          <ListItemButton
            onClick={onLogout}
            sx={{
              borderRadius: "12px",
              "&:hover": {
                backgroundColor: "#fce4e4",
                transform: "translateX(4px)",
                transition: "all 0.2s ease-in-out",
              },
            }}
          >
            <ListItemIcon sx={{ color: "#ff4d4d" }}>
              <Logout />
            </ListItemIcon>
            <ListItemText
              primary="Logout"
              primaryTypographyProps={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 500,
              }}
            />
          </ListItemButton>
        </ListItem>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
