// src/App.tsx
import React, { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  Box,
  Avatar,
  Typography,
  Link,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Stack,
} from '@mui/material'

import Menu from './components/Menu'
import Login from './components/Admin/Login'
import Dashboard from './components/Admin/Dashboard'
import ProtectedRoute from './components/Admin/ProtectedRoute'

const queryClient = new QueryClient()

const customTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#795548' },
    secondary: { main: '#8d6e63' },
    background: { default: '#f5f5f5' },
  },
  typography: {
    fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
  },
})

const developers = [
  { name: 'Million Demeke', href: 'https://t.me/lifam21', avatar: 'M' },
  { name: 'Abel Beyene', href: 'https://abel-codes.vercel.app/', avatar: 'A' },
]

function App() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />

        <Router>
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/manage" element={<Login />} />
            <Route
              path="/manage/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>

        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
          <DialogTitle>
            <Typography variant="h6" align="center">
              Meet the Developers
            </Typography>
          </DialogTitle>
          <DialogContent dividers>
            <Stack spacing={2} alignItems="center">
              {developers.map((dev) => (
                <Box
                  key={dev.name}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    bgcolor: 'background.paper',
                    boxShadow: 1,
                    transition: 'transform 0.2s',
                    '&:hover': { transform: 'scale(1.02)', boxShadow: 3 },
                  }}
                >
                  <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
                    {dev.avatar}
                  </Avatar>
                  <Link
                    href={dev.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="subtitle1"
                    underline="hover"
                    sx={{ flexGrow: 1, color: 'text.primary', fontWeight: 600 }}
                  >
                    {dev.name}
                  </Link>
                </Box>
              ))}
            </Stack>
          </DialogContent>
          <DialogActions sx={{ justifyContent: 'center', pb: 2 }}>
            <Button onClick={handleClose} color="primary" variant="contained" size="small">
              Close
            </Button>
          </DialogActions>
        </Dialog>

        <Box
          component="footer"
          sx={{
            mt: 4,
            bgcolor: 'primary.main',
            color: '#fff',
            py: { xs: 3, sm: 2 },
            px: { xs: 2, sm: 4 },
          }}
        >
          <Container maxWidth="lg">
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center',
                justifyContent: 'space-between',
                textAlign: { xs: 'center', sm: 'left' },
                gap: 1,
              }}
            >
              <Typography variant="body2" sx={{ flexGrow: { sm: 1 } }}>
                &copy; {new Date().getFullYear()} Sabeh Cafe. All rights reserved.
              </Typography>

              <Typography variant="body2">
                Contact:{' '}
                <Link href="tel:+251907268333" color="inherit" underline="always">
                  +251 907 268 333
                </Link>
              </Typography>

              <Button
                onClick={handleOpen}
                variant="contained"
                color="secondary"
                sx={{
                  color: '#fff',
                  textTransform: 'none',
                  fontWeight: 600,
                  boxShadow: 2,
                  borderRadius: 2,
                  px: 3,
                  py: 1,
                  fontSize: '0.75rem',
                  transition: 'background 0.2s, box-shadow 0.2s, transform 0.1s',
                  '&:hover': {
                    bgcolor: 'secondary.dark',
                    boxShadow: 4,
                    transform: 'scale(1.04)',
                  },
                  '&:active': {
                    bgcolor: 'secondary.main',
                    boxShadow: 1,
                    transform: 'scale(0.98)',
                  },
                }}
              >
                Meet the Developers
              </Button>
            </Box>
          </Container>
        </Box>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
