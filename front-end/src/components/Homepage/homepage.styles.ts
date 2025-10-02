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
