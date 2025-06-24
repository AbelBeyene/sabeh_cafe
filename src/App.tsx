import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import Login from './components/Admin/Login'
import Dashboard from './components/Admin/Dashboard'
import ProtectedRoute from './components/Admin/ProtectedRoute'
import { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Box, Avatar } from '@mui/material'

const queryClient = new QueryClient()

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#795548',
    },
    secondary: {
      main: '#8d6e63',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
  },
})

function AppLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const isAdmin = location.pathname.startsWith('/manage')
  return (
    <>
      {!isAdmin && <Navbar />}
      {children}
    </>
  )
}

function App() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <AppLayout>
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
          </AppLayout>
        </Router>
        <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
          <DialogTitle sx={{ fontSize: 18 }}>Developers</DialogTitle>
          <DialogContent>
            <Box display="flex" flexDirection="column" gap={1.5} alignItems="center">
              <Box width="100%" display="flex" flexDirection="column" alignItems="center" gap={1.5}>
                <Box display="flex" alignItems="center" gap={1.2} width="100%" justifyContent="center" p={0} m={0}>
                  <Avatar sx={{ bgcolor: '#795548', width: 28, height: 28, fontSize: 16 }}>M</Avatar>
                  <a
                    href="https://t.me/lifam21"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#795548',
                      fontWeight: 500,
                      textDecoration: 'underline',
                      fontSize: 13,
                      padding: 0,
                      margin: 0,
                    }}
                  >
                    Million Demeke
                  </a>
                </Box>
                <Box display="flex" alignItems="center" gap={1.2} width="100%" justifyContent="center" p={0} m={0}>
                  <Avatar sx={{ bgcolor: '#795548', width: 28, height: 28, fontSize: 16 }}>A</Avatar>
                  <a
                    href="https://abel-codes.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#795548',
                      fontWeight: 500,
                      textDecoration: 'underline',
                      fontSize: 13,
                      padding: 0,
                      margin: 0,
                    }}
                  >
                    Abel Beyene
                  </a>
                </Box>
              </Box>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              color="primary"
              variant="contained"
              size="small"
              sx={{ fontSize: 13, px: 2, py: 0.5 }}
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
        <footer
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px 20px',
            background: '#795548',
            color: '#fff',
            fontWeight: 500,
            fontSize: 13,
            borderTop: '1px solid #eee',
            marginTop: 24,
          }}
        >
          <span style={{ width: 80 }}></span>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              flex: 1,
              justifyContent: 'center',
            }}
          >
            <span style={{ fontSize: 13 }}>+251907268333</span>
            <span
              style={{
                cursor: 'pointer',
                color: '#fff',
                textDecoration: 'underline',
                fontWeight: 500,
                fontSize: 13,
                marginLeft: 12,
              }}
              onClick={handleOpen}
            >
              Contact Developer
            </span>
          </Box>
          <span style={{ width: 80 }}></span>
        </footer>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
