export const birthdayCardStyles = {
  p: 3,
  borderRadius: 3,
  border: "1px solid",
  borderColor: "grey.200",
  "&:hover": {
    borderColor: "#6c69ff",
    boxShadow: 6,
  },
  width: { xs: "95%", sm: "100%" },
  mx: { xs: "auto", sm: 0 },
  padding: { xs: 2, sm: 3 },
};

export const birthdayCardTopRow = {
  display: "flex",
  justifyContent: "space-between",
  flexDirection: { xs: "column", sm: "row" },
  alignItems: { xs: "center", sm: "center" },
  textAlign: { xs: "center", sm: "left" },
  gap: { xs: 2, sm: 0 },
};

export const birthdayCardAvatarStyles = {
  borderRadius: "50%",
  bgcolor: "#fe7475",
  color: "white",
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: { xs: 64, sm: 64 },
  height: { xs: 64, sm: 64 },
  fontSize: { xs: "14px", sm: "16px" },
  mr: { xs: 0, sm: 2 },
};

export const birthdayCardWishlistButtonStyles = {
  bgcolor: "#ffbe3d",
  color: "white",
  "&:hover": { bgcolor: "#fe7475" },
  width: 50,
  height: 50,
  mt: { xs: 1.5, sm: 0 },
  alignSelf: { xs: "center", sm: "flex-start" },
};

export const birthdayCardButtonsContainer = {
  display: "flex",
  mt: 3,
  flexDirection: { xs: "column", sm: "row" },
  justifyContent: { xs: "center", sm: "flex-end" },
  gap: { xs: 1.2, sm: 2 },
  px: { xs: "50px", sm: "55px", lg: 0, xl: 0 },
};

export const birthdayCardTypographyStyles = {
  fontWeight: "bold",
  fontSize: { xs: "14px", sm: "16px", xl: "20px" },
  fontFamily: "Poppins",
};

export const birthdayCardDaysLeftTextStyles = {
  fontSize: { xs: "12px", sm: "14px", xl: "15px" },
  fontFamily: "Poppins",
};
