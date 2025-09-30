import { 
  Box, 
  Typography, 
  Container, 
  Paper, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  Avatar,
  IconButton
} from '@mui/material';
import { 
  Edit, 
  CardGiftcard, 
  Settings, 
  Logout,
  Menu,
  Close
} from '@mui/icons-material';
import { motion } from 'motion/react';
import { useState } from 'react';

const Homepage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Mock data
  const birthdaysByMonth = [
    {
      month: "March 2025",
      birthdays: [
        { id: 1, name: 'John', lastName: 'Doe', daysLeft: 15 },
        { id: 2, name: 'Emma', lastName: 'Wilson', daysLeft: 17 },
      ]
    },
    {
      month: "April 2025", 
      birthdays: [
        { id: 3, name: 'Sarah', lastName: 'Smith', daysLeft: 22 },
        { id: 4, name: 'Mike', lastName: 'Johnson', daysLeft: 35 },
      ]
    },
    {
      month: "May 2025",
      birthdays: [
        { id: 5, name: 'Emily', lastName: 'Brown', daysLeft: 51 },
        { id: 6, name: 'David', lastName: 'Wilson', daysLeft: 62 },
      ]
    }
  ];

  const stats = [
    { label: 'Upcoming Birthdays', value: '3', sublabel: 'Next 30 days' },
    { label: 'Active Celebrations', value: '2', sublabel: 'Being organized' },
    { label: 'Team Members', value: '24', sublabel: 'In your circle' },
  ];

  const menuItems = [
    { icon: <Edit />, text: 'Edit Profile', color: '#6c69ff' },
    { icon: <CardGiftcard />, text: 'My Wishlist', color: '#fe7475' },
    { icon: <Settings />, text: 'Settings', color: '#ffbe3d' },
  ];

  const handleCardClick = (birthday: { id: number; name: string; lastName: string; daysLeft: number; }) => {
    console.log('Birthday card clicked:', birthday);
  };

  const handleProfileEdit = () => {
    console.log('Edit profile clicked');
  };

  const handleLogout = () => {
    console.log('Logout clicked');
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f4f5fb' }}>
      {/* Sidebar */}
      <Drawer
        variant="persistent"
        anchor="left"
        open={sidebarOpen}
        sx={{
          width: 320,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 320,
            boxSizing: 'border-box',
            backgroundColor: 'white',
            border: 'none',
            boxShadow: 3,
            borderRadius: '0 24px 24px 0',
          },
        }}
      >
        {/* Profile Section with Toggle Button */}
        <Box className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900 font-[Poppins]">Profile</h2>
          <IconButton
            onClick={() => setSidebarOpen(false)}
            sx={{
              backgroundColor: '#6c69ff',
              color: 'white',
              '&:hover': {
                backgroundColor: '#5854e6',
              },
              width: 40,
              height: 40,
            }}
          >
            <Close />
          </IconButton>
        </Box>
        
        <Box className="p-6 flex flex-col h-full">
          {/* User Info */}
          <Box className="flex items-center space-x-4 mb-8">
            <Avatar
              sx={{
                width: 64,
                height: 64,
                bgcolor: '#6c69ff',
                fontSize: '1.25rem',
                fontWeight: 'bold',
              }}
            >
              AJ
            </Avatar>
            <Box>
              <h3 className="font-semibold text-gray-900 font-[Poppins]">Alex Johnson</h3>
              <p className="text-gray-600 text-sm font-[Poppins]">alex.j@company.com</p>
            </Box>
          </Box>

          {/* Menu Items */}
          <List className="flex-1">
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
                <ListItemButton
                  onClick={item.text === 'Edit Profile' ? handleProfileEdit : undefined}
                  sx={{
                    borderRadius: 16,
                    padding: '12px 16px',
                    '&:hover': {
                      backgroundColor: '#f4f5fb',
                      border: `1px solid ${item.color}`,
                      transform: 'scale(1.02)',
                    },
                    transition: 'all 0.2s ease-in-out',
                    border: '1px solid #f1f1f1',
                  }}
                >
                  <ListItemIcon sx={{ color: item.color, minWidth: 40 }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText 
                    primary={item.text}
                    primaryTypographyProps={{
                      fontFamily: 'Poppins',
                      color: 'text.primary',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          {/* Logout Button */}
          <ListItem disablePadding sx={{ mt: 'auto' }}>
            <ListItemButton
              onClick={handleLogout}
              sx={{
                borderRadius: 16,
                padding: '12px 16px',
                backgroundColor: '#f4f5fb',
                '&:hover': {
                  backgroundColor: '#fee',
                  color: 'error.main',
                  border: '1px solid',
                  borderColor: 'error.light',
                  transform: 'scale(1.02)',
                },
                transition: 'all 0.2s ease-in-out',
                border: '1px solid #f1f1f1',
              }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                <Logout />
              </ListItemIcon>
              <ListItemText 
                primary="Logout"
                primaryTypographyProps={{
                  fontFamily: 'Poppins',
                }}
              />
            </ListItemButton>
          </ListItem>
        </Box>
      </Drawer>

      {/* Main Content - Always Centered */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          minHeight: '100vh',
          transition: 'margin-left 0.3s ease-in-out',
          marginLeft: sidebarOpen ? '320px' : 0,
          backgroundColor: '#f4f5fb',
          width: '100%',
        }}
      >
        {/* Toggle Button when sidebar is closed */}
        {!sidebarOpen && (
          <IconButton
            onClick={() => setSidebarOpen(true)}
            sx={{
              position: 'fixed',
              top: 16,
              left: 16,
              zIndex: 1300,
              backgroundColor: '#6c69ff',
              color: 'white',
              '&:hover': {
                backgroundColor: '#5854e6',
              },
              width: 48,
              height: 48,
            }}
          >
            <Menu />
          </IconButton>
        )}

        {/* Content Container */}
        <Container 
          maxWidth="xl"
          sx={{ 
            width: '100%',
            py: 4,
            px: { xs: 2, sm: 3, md: 4, lg: 6 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Welcome Title */}
          <Box className="mb-12 text-center" sx={{ width: '100%', maxWidth: '1400px' }}>
            <Typography 
              variant="h3" 
              className="mb-3"
              sx={{ 
                fontFamily: 'Poppins',
                fontWeight: 'bold',
                color: 'text.primary',
                fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' }
              }}
            >
              Welcome back, Alex! 🎉
            </Typography>
            <Typography 
              variant="h6"
              sx={{ 
                fontFamily: 'Poppins',
                color: 'text.secondary',
                fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' }
              }}
            >
              Here's your birthday overview
            </Typography>
          </Box>

          {/* Stats Cards - Centered */}
          <Box 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
            sx={{ 
              width: '100%',
              maxWidth: '1400px',
            }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Paper 
                  className="p-6 hover:shadow-md transition-all duration-300"
                  sx={{ 
                    backgroundColor: 'white',
                    borderRadius: 4,
                    boxShadow: 2,
                    '&:hover': {
                      boxShadow: 6
                    },
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <div className="text-3xl font-bold text-gray-900 font-[Poppins] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 font-[Poppins] mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-600 font-[Poppins]">
                    {stat.sublabel}
                  </div>
                </Paper>
              </motion.div>
            ))}
          </Box>

          {/* Upcoming Birthdays by Month - Centered */}
          <Box 
            className="space-y-8"
            sx={{ 
              width: '100%',
              maxWidth: '1400px',
            }}
          >
            {birthdaysByMonth.map((monthData, index) => (
              <Paper 
                key={index}
                className="p-6"
                sx={{ 
                  backgroundColor: 'white',
                  borderRadius: 4,
                  boxShadow: 2,
                }}
              >
                <Typography 
                  variant="h5" 
                  className="mb-6 border-b border-gray-100 pb-3"
                  sx={{ 
                    fontFamily: 'Poppins',
                    fontWeight: 600,
                    color: 'text.primary'
                  }}
                >
                  {monthData.month}
                </Typography>
                
                <div className="space-y-4">
                  {monthData.birthdays.map((birthday) => (
                    <motion.div
                      key={birthday.id}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Paper 
                        className="p-6 cursor-pointer group transition-all duration-300"
                        sx={{ 
                          backgroundColor: 'white',
                          borderRadius: 3,
                          border: '1px solid',
                          borderColor: 'grey.200',
                          '&:hover': {
                            boxShadow: 6,
                            borderColor: '#6c69ff',
                            borderRadius: 4,
                          }
                        }}
                        onClick={() => handleCardClick(birthday)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.2 }}
                              className="w-16 h-16 bg-[#fe7475] rounded-full flex items-center justify-center text-white font-semibold text-xl group-hover:bg-[#6c69ff] transition-all duration-300"
                            >
                              {birthday.name[0]}{birthday.lastName[0]}
                            </motion.div>
                            <div>
                              <h4 className="font-semibold text-gray-900 font-[Poppins] text-xl group-hover:text-[#6c69ff] transition-colors duration-300">
                                {birthday.name} {birthday.lastName}
                              </h4>
                              <p className="text-gray-600 font-[Poppins]">
                                Birthday celebration
                              </p>
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.2 }}
                              className="text-2xl font-bold text-[#6c69ff] font-[Poppins] mb-1"
                            >
                              {birthday.daysLeft} days
                            </motion.div>
                            <div className="text-sm text-gray-600 font-[Poppins]">
                              until celebration
                            </div>
                            <motion.div
                              initial={{ opacity: 0 }}
                              whileHover={{ opacity: 1 }}
                              transition={{ duration: 0.3 }}
                              className="mt-2 text-[#6c69ff] text-sm font-[Poppins] font-medium"
                            >
                              Click to contribute →
                            </motion.div>
                          </div>
                        </div>
                      </Paper>
                    </motion.div>
                  ))}
                </div>
              </Paper>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Homepage;