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
