import { Drawer, List, ListItemIcon, ListItemText, Toolbar, Box, ListItemButton, Typography } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import { Link, useLocation } from 'react-router-dom'
import { categories } from '../../data/menuData'

const drawerWidth = 220

const navItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/manage/dashboard' },
  { text: 'Logout', icon: <ExitToAppIcon />, path: '/manage' },
]

const Sidebar = () => {
  const location = useLocation()
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
          background: '#fff',
          borderRight: '1px solid #eee',
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto', mt: 2 }}>
        <List>
          {navItems.map((item) => (
            <ListItemButton
              key={item.text}
              component={Link}
              to={item.path}
              selected={location.pathname === item.path}
              sx={{
                borderRadius: 2,
                mb: 1,
                mx: 1,
                bgcolor: location.pathname === item.path ? 'primary.100' : 'transparent',
                color: location.pathname === item.path ? 'primary.main' : 'inherit',
                '&:hover': {
                  bgcolor: 'primary.50',
                },
              }}
            >
              <ListItemIcon sx={{ color: 'inherit' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>
        <Typography variant="subtitle2" sx={{ mt: 3, mb: 1, ml: 2, color: 'text.secondary', fontWeight: 600 }}>
          Categories
        </Typography>
        <List>
          {categories.map((cat) => (
            <ListItemButton key={cat.id} sx={{ borderRadius: 2, mb: 1, mx: 1 }}>
              <ListItemIcon>{cat.icon}</ListItemIcon>
              <ListItemText primary={cat.name} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}

export default Sidebar 