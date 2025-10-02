export const sidebarStyles = {
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
};

export const iconButtonStyles = {
  mb: 3,
  bgcolor: "#6c69ff",
  color: "#fff",
  width: { xs: 48, sm: 64 },
  height: { xs: 48, sm: 64 },
  "&:hover": { bgcolor: "#6c69ff" },
};

export const wishlistIconStyles = {
  mb: 3,
  bgcolor: "#ffbe3d",
  color: "#000",
  width: { xs: 48, sm: 64 },
  height: { xs: 48, sm: 64 },
  "&:hover": { bgcolor: "#f0b02e" },
};

export const logoutButtonStyles = {
  mb: 3,
  bgcolor: "#f4f5fb",
  color: "#ff4d4d",
  width: { xs: 48, sm: 64 },
  height: { xs: 48, sm: 64 },
  "&:hover": { bgcolor: "#fce4e4" },
};
