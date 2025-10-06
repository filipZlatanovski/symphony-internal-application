import type { SxProps, Theme } from "@mui/material";

export const sidebarBoxStyles = (
  open: boolean,
  isMobile: boolean
): SxProps<Theme> => {
  if (isMobile) {
    return {
      width: "50%",
      maxWidth: "50wv",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      height: "70vh",
      py: "15px",
      px: "10px",
      bgcolor: "#fff",
      boxSizing: "border-box",
      overflowY: "auto",
      overflowX: "none",
      transition: "none",
    };
  }

  return {
    position: isMobile ? "relative" : "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    width: open ? 260 : 90,
    bgcolor: "#fff",
    borderRight: "1px solid #eee",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    py: 3,
    px: 2,
    transition: "width 0.5s ease",
    boxShadow: open ? "2px 0 8px rgba(0,0,0,0.15)" : "none",
  };
};

export const sidebarOverlayStyles = (open: boolean, isMobile: boolean) => ({
  display: isMobile && open ? "block" : "none",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  bgcolor: "rgba(0, 0, 0, 0.5)",
  transition: "opacity 0.3s ease",
});

export const hamburgerButtonStyles = {
  position: "fixed",
  top: 15,
  left: 15,
  bgcolor: "#6c69ff",
  color: "#fff",
  width: 48,
  height: 48,
  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
  "&:hover": {
    bgcolor: "#5a57e6",
  },
};

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

export const sidebarTextStyles = (open: boolean, isMobile: boolean) => ({
  ml: 2,
  fontWeight: 500,
  fontFamily: "Poppins, sans-serif",
  whiteSpace: "nowrap",
  overflow: "hidden",
  opacity: isMobile || open ? 1 : 0,
  maxWidth: isMobile || open ? 200 : 0,
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

export const hompageBoxContainerStyles = (
  sidebarOpen: boolean,
  isMobile: boolean
) => ({
  marginLeft: isMobile ? 0 : sidebarOpen ? 260 : 90,
  transition: isMobile ? "none" : "margin-left 0.5s ease",
  width: isMobile ? "100%" : `calc(100% - ${sidebarOpen ? 260 : 90}px)`,
  minHeight: "100vh",
});
