export const birthdayCardStyles = {
  p: 3,
  borderRadius: 3,
  border: "1px solid",
  borderColor: "grey.200",
  "&:hover": {
    borderColor: "#6c69ff",
    boxShadow: 6,
  },
};

export const birthdayCardTopRow = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
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
};

export const birthdayCardWishlistButtonStyles = {
  bgcolor: "#ffbe3d",
  color: "white",
  "&:hover": { bgcolor: "#fe7475" },
  width: 50,
  height: 50,
};

export const birthdayCardButtonsContainer = {
  display: "flex",
  justifyContent: "flex-end",
  mt: 3,
  gap: 2,
};
