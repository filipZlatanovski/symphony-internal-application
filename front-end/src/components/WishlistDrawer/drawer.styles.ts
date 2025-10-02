export const drawerBaseStyles = {
  "& .MuiDrawer-paper": {
    borderTopLeftRadius: "20px",
    borderBottomLeftRadius: "20px",
    padding: "1rem",
    backgroundColor: "#fff",
    boxShadow: "0 0 20px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease-in-out",
    width: {
      xs: "85%",
      sm: "400px",
    },
    paddingInline: {
      xs: "0.8rem",
      sm: "1.5rem",
    },
    overflowX: "none",
  },
};

export const drawerMobileStyles = {
  "& .MuiDrawer-paper": {
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
    padding: "1rem",
    backgroundColor: "#fff",
    boxShadow: "0 -4px 20px rgba(0,0,0,0.2)",
    height: "70vh",
    width: "100%",
    overflowX: "none",
  },
};

export const wishlistItemsStyles = {
  fontFamily: "Poppins",
  fontWeight: 600,
  fontSize: 20,
};
