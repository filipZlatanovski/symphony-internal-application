import { Box, Container, Typography, IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
// import StatsCard from "../StatsCard/StatsCard";
import MonthSection from "../MonthSection/MonthSection";

const Homepage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // const stats = [
  //   { label: "Upcoming Birthdays", value: 3, sublabel: "Next 30 days" },
  //   { label: "Active Celebrations", value: 2, sublabel: "You're contributing to" },
  //   { label: "Team Members", value: 24, sublabel: "In your circle" },
  // ];

  const birthdaysByMonth = [
    { month: "October 2025", birthdays: [{ id: 1, name: "John", lastName: "Doe", daysLeft: 8 },{id:3, name: "Jane", lastName: "Johnson", daysLeft: 26},{ id: 1, name: "Larra", lastName: "Smith", daysLeft: 15 },{ id: 1, name: "Emma", lastName: "Doe", daysLeft: 18 }] },
    { month: "November 2025", birthdays: [{id:3, name: "Jane", lastName: "Johnson", daysLeft: 26}, {id:4, name: "Pam", lastName: "Beasly", daysLeft: 36}, {id:5, name:"Anna", lastName:"Smith", daysLeft: 77}] },
  ];

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#f4f5fb" }}>
      <Sidebar 
        open={sidebarOpen}
        setOpen={setSidebarOpen}
        onLogout={() => console.log("Logout")}
        onEditProfile={() => console.log("Edit Profile")} 
        onWishlist={() => console.log("Wishlist")} 
      />

      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1, 
          p: 4, 
          ml: sidebarOpen ? "260px" : "90px",
          transition: "margin-left 0.4s ease-in-out",
        }}
      >

        <Container maxWidth={false} sx={{ maxWidth: "none !important", px: { xs: 2, sm: 3, md: 4 } }}>
          <Typography 
            variant="h3" 
            sx={{ 
              mb: 4,
              fontFamily: "Poppins, sans-serif",
              fontWeight: "bold"
            }}
          >
            Welcome back, Alex! 🎉
          </Typography>

          {/* CSS Grid for stats */}
          {/* <Box 
            sx={{ 
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(3, 1fr)'
              },
              gap: 3,
              mb: 4
            }}
          >
            {stats.map((s, i) => (
              <StatsCard key={i} {...s} />
            ))}
          </Box> */}

          {/* Simple Box for month sections */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {birthdaysByMonth.map((m, i) => (
              <MonthSection 
                key={i}
                month={m.month} 
                birthdays={m.birthdays} 
                onCardClick={(id) => console.log("Clicked birthday", id)} 
              />
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Homepage;