// src/components/Menu.tsx
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  CircularProgress,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { motion } from 'framer-motion'
import { menuItems, categories } from '../data/menuData'
import type { MenuItem } from '../types/menu'
import logo from '../assets/logo.png'

const MotionCard = motion(Card)
const drawerWidth = 240

const fetchMenuItems = async (): Promise<MenuItem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(menuItems), 500)
  })
}

const Menu = () => {
  const theme = useTheme()
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'))

  const [mobileOpen, setMobileOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const { data: items, isLoading } = useQuery({
    queryKey: ['menuItems'],
    queryFn: fetchMenuItems,
  })

  const filteredItems = items?.filter(
    (item) => selectedCategory === 'all' || item.category === selectedCategory
  )

  const handleDrawerToggle = () => {
    setMobileOpen((open) => !open)
  }

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress />
      </Box>
    )
  }

  // The drawer content (chip list)
  const drawer = (
    <Box sx={{ p: 2 }}>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mb: 2 }}>
        <img src={logo} alt="Logo" style={{ width: '100%', maxWidth: 220, height: 80, objectFit: 'contain' }} />
      </Box>
      <Typography variant="h6" gutterBottom>
        Categories
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Chip
          label="All"
          onClick={() => {
            setSelectedCategory('all')
            if (!isMdUp) setMobileOpen(false)
          }}
          color={selectedCategory === 'all' ? 'primary' : 'default'}
        />
        {categories.map((cat) => (
          <Chip
            key={cat.id}
            label={`${cat.icon} ${cat.name}`}
            onClick={() => {
              setSelectedCategory(cat.id)
              if (!isMdUp) setMobileOpen(false)
            }}
            color={selectedCategory === cat.id ? 'primary' : 'default'}
          />
        ))}
      </Box>
    </Box>
  )

  return (
    <Box sx={{ display: 'flex' }}>
      {/* AppBar with hamburger on mobile */}
      {!isMdUp && (
        <AppBar position="fixed">
          <Toolbar>
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={logo} alt="Logo" style={{ width: '100%', maxWidth: 60, height: 60, objectFit: 'contain', background: 'white', padding: 8, borderRadius: '50%', boxSizing: 'content-box' }} />
            </Box>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ position: 'absolute', left: 8 }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      )}

      {/* Navigation drawer */}
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: 0 }}
      >
        <Drawer
          variant={isMdUp ? 'permanent' : 'temporary'}
          open={isMdUp ? true : mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }} // better mobile performance
          sx={{
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          // push content below AppBar on mobile
          ...( !isMdUp && { mt: theme.spacing(7) }),
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {filteredItems?.map((item) => (
              <Box
                key={item.id}
                sx={{
                  width: {
                    xs: '100%',
                    sm: 'calc(50% - 8px)',
                    md: 'calc(25% - 12px)',
                  },
                  maxWidth: 260,
                }}
              >
                <MotionCard
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      transition: 'transform 0.2s ease-in-out',
                    },
                    p: 1,
                  }}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.image}
                    alt={item.name}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.name}
                      {item.amharicName && (
                        <Typography
                          component="span"
                          variant="subtitle1"
                          color="text.secondary"
                          sx={{ ml: 1 }}
                        >
                          ({item.amharicName})
                        </Typography>
                      )}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 1, fontSize: '0.85rem' }}
                    >
                      {item.description}
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Typography variant="h6" color="primary">
                        {item.price.toFixed(0)} Birr
                      </Typography>
                    </Box>
                  </CardContent>
                </MotionCard>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default Menu
