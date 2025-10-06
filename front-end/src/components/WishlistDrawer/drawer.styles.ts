export const drawerBaseStyles = {
  "& .MuiDrawer-paper": {
    borderTopLeftRadius: "20px",
    borderBottomLeftRadius: "20px",
    padding: "1rem",
    backgroundColor: "#fff",
    boxShadow: "0 0 20px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease-in-out",
    paddingInline: {
      xs: "0.8rem",
      sm: "1.5rem",
    },
    overflowX: "none",
  },
};

export const drawerMobileStyles = {
  "& .MuiDrawer-paper": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
    backgroundColor: "#fff",
    boxShadow: "0 -4px 20px rgba(0,0,0,0.2)",
    height: "60vh",
    width: "100%",
  },
};

export const wishlistItemsStyles = {
  fontFamily: "Poppins",
  fontWeight: 600,
  fontSize: {
    xs: "15px",
    sm: "18px",
    md: "20px",
    lg: "22px",
    xl: "22px",
  },
};
