import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Avatar, Box } from '@mui/material';
import { Edit, CardGiftcard, Settings, Logout } from '@mui/icons-material';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  onProfileEdit: () => void;
  onLogout: () => void;
}

export default function Sidebar({ open, onProfileEdit, onLogout }: SidebarProps) {
  const menuItems = [
    { icon: <Edit />, text: 'Edit Profile', onClick: onProfileEdit, color: '#6c69ff' },
    { icon: <CardGiftcard />, text: 'My Wishlist', onClick: () => {}, color: '#fe7475' },
    { icon: <Settings />, text: 'Settings', onClick: () => {}, color: '#ffbe3d' },
  ];

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      sx={{
        width: 320,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 320,
          boxSizing: 'border-box',
          backgroundColor: 'white',
          border: 'none',
          boxShadow: 3,
        },
      }}
    >
      {/* Profile Section */}
      <Box className="p-6 border-b border-gray-100">
        <h2 className="text-xl font-semibold text-gray-900 font-[Poppins]">Profile</h2>
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
                onClick={item.onClick}
                sx={{
                  borderRadius: 3,
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
            onClick={onLogout}
            sx={{
              borderRadius: 3,
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
  );
}