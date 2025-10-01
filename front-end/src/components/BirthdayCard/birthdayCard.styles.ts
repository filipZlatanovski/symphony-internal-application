export const birthdayCardPaperStyles = {
  p: 3,
  cursor: "pointer",
  borderRadius: 3,
  border: "1px solid",
  borderColor: "grey.200",
  "&:hover": {
    borderColor: "#6c69ff",
    boxShadow: 6,
  },
};

export const birthdayCardBoxStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "left",
};

export const birthdayCardAvatarStyles = {
  width: 64,
  height: 64,
  borderRadius: "50%",
  bgcolor: "#fe7475",
  color: "white",
  fontWeight: "bold",
  fontSize: "1.25rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  mr: 2,
  "&:hover": { bgcolor: "#6c69ff" },
};
