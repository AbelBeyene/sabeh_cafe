import { AppBar, Toolbar, Typography, Container } from '@mui/material'
import LocalCafeIcon from '@mui/icons-material/LocalCafe'

const Navbar = () => {
  return (
    <AppBar position="static" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar>
          <LocalCafeIcon sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Sabeh Cafe
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar 