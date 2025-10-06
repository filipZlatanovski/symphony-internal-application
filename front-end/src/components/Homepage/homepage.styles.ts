export const iconButtonStyles = {
  position: "fixed",
  top: 16,
  left: 16,
  zIndex: 1300,
  backgroundColor: "#6c69ff",
  color: "white",
  "&:hover": {
    backgroundColor: "#5854e6",
  },
};

export const mainCardStyles = {
  display: "flex",
  minHeight: "100vh",
  backgroundColor: "#f4f5fb",
};

export const monthSectionStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: 2,
};

export const statsStyles = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    md: "repeat(3, 1fr)",
  },
  gap: 3,
  mb: 4,
};

export const containerStatsStyles = {
  maxWidth: "none !important",
  px: { xs: 2, sm: 3, md: 4 },
};

export const sidebarStyles = (sidebar: boolean) => ({
  flexGrow: 1,
  p: 4,
  ml: sidebar ? "100px" : 0,
  transition: "margin-left 0.3s ease-in-out",
  width: sidebar ? "calc(100% - 10px)" : "100%",
});

export const typographyTextStyles = {
  fontFamily: "Poppins",
  fontWeight: 700,
  mb: 5,
  fontSize: {
    xs: "2rem",
    sm: "2.25rem",
    md: "2.5rem",
    lg: "2.75rem",
    xl: "3rem",
  },
  lineHeight: {
    xs: 1.2,
    sm: 1.3,
    md: 1.4,
    lg: 1.5,
  },
  textAlign: {
    xs: "center",
    sm: "center",
    md: "center",
    lg: "left",
    xl: "left",
  },
};

export const homepageFirstBoxStyles = {
  display: "flex",
  minHeight: "100vh",
  backgroundColor: "#f4f5fb",
};

export const hompageBoxContainerStyles = (sidebarOpen: boolean) => ({
  flexGrow: 1,
  p: { xs: 2, sm: 3, md: 4 },
  ml: {
    xs: 0,
    sm: sidebarOpen ? "260px" : "90px",
  },
  transition: "margin-left 0.4s ease-in-out",
});

export const hamburgerButtonStyles = {
  position: "fixed",
  top: 10,
  left: 15,
  zIndex: 1400,
  bgcolor: "#6c69ff",
  color: "#fff",
  width: 48,
  height: 48,
  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
  "&:hover": {
    bgcolor: "#5a57e6",
  },
};
