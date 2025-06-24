import { AppBar, Toolbar, Typography, Container } from '@mui/material'
import logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <AppBar position="static" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar>
          <img src={logo} alt="Logo" style={{ height: 40, marginRight: 16, background: 'white', padding: 4, borderRadius: '50%', boxSizing: 'content-box' }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Sabeh Cafe
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar 