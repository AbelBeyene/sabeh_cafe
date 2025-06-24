import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Container,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Chip,
  CircularProgress,
  useTheme,
  useMediaQuery,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { motion } from 'framer-motion'
import { menuItems, categories } from '../data/menuData'
import type { MenuItem } from '../types/menu'
import logo from '../assets/logo.png'

const MotionCard = motion(Card)
const drawerWidth = 260

const fetchMenuItems = async (): Promise<MenuItem[]> =>
  new Promise((res) => setTimeout(() => res(menuItems), 500))

const Menu: React.FC = () => {
  const theme = useTheme()
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'))

  const [mobileOpen, setMobileOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)
  const [detailOpen, setDetailOpen] = useState(false)

  const { data: items, isLoading } = useQuery({
    queryKey: ['menuItems'],
    queryFn: fetchMenuItems,
  })
  const filtered: MenuItem[] = items?.filter(
    (i: MenuItem) => selectedCategory === 'all' || i.category === selectedCategory
  ) || []

  const toggleDrawer = () => setMobileOpen((o) => !o)
  const handleCardClick = (item: MenuItem) => {
    setSelectedItem(item)
    setDetailOpen(true)
  }
  const handleDetailClose = () => setDetailOpen(false)

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="60vh"
        bgcolor="background.default"
      >
        <CircularProgress />
      </Box>
    )
  }

  /* Drawer content */
  const drawerContent = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          mt:8,
          px: 2,
          py: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box
        pl={5}
          component="img"
          src={logo}
          alt="Logo"
          sx={{ height: 100, objectFit: 'contain' }}
        />
        {!isMdUp && (
          <IconButton onClick={toggleDrawer}>
            <CloseIcon />
          </IconButton>
        )}
      </Box>
      <Divider />
      <Box sx={{ p: 2, flexGrow: 1, overflowY: 'auto' }}>
        <Typography variant="subtitle1" gutterBottom>
          Categories
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Chip
            label="All"
            variant={selectedCategory === 'all' ? 'filled' : 'outlined'}
            color="primary"
            onClick={() => {
              setSelectedCategory('all')
              if (!isMdUp) toggleDrawer()
            }}
            sx={{ textTransform: 'none' }}
          />
          {categories.map((cat) => (
            <Chip
              key={cat.id}
              label={`${cat.icon} ${cat.name}`}
              variant={selectedCategory === cat.id ? 'filled' : 'outlined'}
              color="primary"
              onClick={() => {
                setSelectedCategory(cat.id)
                if (!isMdUp) toggleDrawer()
              }}
              sx={{ textTransform: 'none' }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  )

  return (
    <Box sx={{ display: 'flex', bgcolor: 'background.default' }}>
      {/* Mobile AppBar */}
      {!isMdUp && (
        <AppBar
          position="fixed"
          color="inherit"
          elevation={1}
          sx={{ zIndex: theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <IconButton edge="start" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{ height: 32, mx: 2, objectFit: 'contain' }}
            />
            <Typography variant="h6" color="text.primary" noWrap>
              Sabeh Cafe
            </Typography>
          </Toolbar>
        </AppBar>
      )}

      {/* Drawer */}
      <Box component="nav" sx={{ width: { md: drawerWidth }, flexShrink: 0 }}>
        <Drawer
          variant={isMdUp ? 'permanent' : 'temporary'}
          open={isMdUp ? true : mobileOpen}
          onClose={toggleDrawer}
          ModalProps={{ keepMounted: true }}
          PaperProps={{
            sx: {
              width: drawerWidth,
              bgcolor: 'background.paper',
              boxShadow: 3,
              border: 'none',
            },
          }}
        >
          {drawerContent}
        </Drawer>
      </Box>

      {/* Main */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          ...( !isMdUp && { mt: theme.spacing(8) }),
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gap: 3,
              gridTemplateColumns: {
                xs: 'repeat(auto-fill, minmax(140px, 1fr))',
                md: 'repeat(auto-fill, minmax(200px, 1fr))',
              },
            }}
          >
            {filtered.map((item: MenuItem) => (
              <CardActionArea
                key={item.id}
                sx={{
                  width: '100%',
                  maxWidth: { xs: 160, md: 220 },
                }}
                onClick={() => handleCardClick(item)}
              >
                <MotionCard
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  sx={{
                    borderRadius: 2,
                    boxShadow: 2,
                    overflow: 'hidden',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    width: '100%',
                    maxWidth: { xs: 160, md: 220 },
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 6,
                    },
                  }}
                >
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      height={70}
                      image={item.image}
                      alt={item.name}
                      sx={{
                        height: { xs: 70, md: 140 },
                        objectFit: 'cover',
                        transition: 'transform 0.3s',
                        '&:hover': { transform: 'scale(1.05)' },
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        bgcolor: 'rgba(0,0,0,0.4)',
                        color: '#fff',
                        py: 0.5,
                        px: 1,
                      }}
                    >
                      <Typography variant="subtitle2">{item.name}</Typography>
                    </Box>
                  </Box>
                  <CardContent sx={{ py: 0.5, px: 1 }}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      noWrap
                      title={item.description}
                      sx={{ fontSize: '0.7rem' }}
                    >
                      {item.description}
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mt: 1,
                      }}
                    >
                      <Typography variant="subtitle2" color="primary" sx={{ fontSize: '0.95rem' }}>
                        {item.price.toFixed(0)} Birr
                      </Typography>
                    </Box>
                  </CardContent>
                </MotionCard>
              </CardActionArea>
            ))}
          </Box>
        </Container>
        <Dialog open={detailOpen} onClose={handleDetailClose} maxWidth="xs" fullWidth>
          <DialogTitle>{selectedItem?.name} {selectedItem?.amharicName && <span style={{ color: '#795548', fontWeight: 400, fontSize: 16 }}>({selectedItem.amharicName})</span>}</DialogTitle>
          <DialogContent>
            {selectedItem && (
              <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
                <img src={selectedItem.image} alt={selectedItem.name} style={{ width: '100%', maxWidth: 240, borderRadius: 8, marginBottom: 8 }} />
                <Typography variant="body1" sx={{ mb: 1 }}>{selectedItem.description}</Typography>
                <Typography variant="h6" color="primary">{selectedItem.price} Birr</Typography>
              </Box>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDetailClose} color="primary" variant="contained">Close</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  )
}

export default Menu
