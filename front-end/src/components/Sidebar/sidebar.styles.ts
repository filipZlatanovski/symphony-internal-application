export const sidebarBoxStyles = (open: boolean) => ({
  position: "fixed",
  left: 0,
  top: 0,
  bottom: 0,
  width: open ? 260 : 90,
  bgcolor: "#fff",
  borderRight: "1px solid #eee",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  py: 3,
  px: 2,
  zIndex: 1000,
  transition: "width 0.5s ease",
});

export const profileIconStyles = {
  display: "flex",
  alignItems: "center",
  mb: 3,
  cursor: "pointer",
  width: "100%",
};

export const profileIconButtonStyles = {
  bgcolor: "#6c69ff",
  color: "#fff",
  width: 56,
  height: 56,
  "&:hover": { bgcolor: "#6c69ff" },
};

export const sidebarTextStyles = (open: boolean) => ({
  ml: 2,
  fontWeight: 500,
  fontFamily: "Poppins, sans-serif",
  whiteSpace: "nowrap",
  overflow: "hidden",
  opacity: open ? 1 : 0,
  maxWidth: open ? 200 : 0,
  transition: "all 0.5s ease",
});

export const iconButtonStyles = {
  display: "flex",
  alignItems: "center",
  mb: 3,
  cursor: "pointer",
  width: "100%",
};

export const wishlistIconStyles = {
  bgcolor: "#ffbe3d",
  color: "#000",
  width: 56,
  height: 56,
  "&:hover": { bgcolor: "#f0b02e" },
};

export const logoutButtonStyles = {
  bgcolor: "#f4f5fb",
  color: "#ff4d4d",
  width: 56,
  height: 56,
  "&:hover": { bgcolor: "#fce4e4" },
};
