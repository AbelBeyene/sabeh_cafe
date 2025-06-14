import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import Menu from './components/Menu'
import Navbar from './components/Navbar'

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

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Menu />} />
          </Routes>
        </Router>
        <ReactQueryDevtools />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
