'use client'
import { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Container, Button, TextField,
  IconButton, Box, createTheme, ThemeProvider
} from '@mui/material';
import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

// Create a dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#8b5cf6',
    },
    background: {
      default: '#000000',
      paper: '#000000',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

const StyledAppBar = styled(AppBar)({
  background: 'transparent',
  boxShadow: 'none',
});

const NavButton = styled(Button)({
  color: 'white',
  marginLeft: '20px',
});

const SearchBar = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.3)',
      borderRadius: '50px',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.5)',
    },
  },
});

const GradientButton = styled(Button)({
  background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
  margin: '0 10px',
});

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{
        minHeight: '100vh',
        background: 'linear-gradient(45deg, #000000 30%, #2c0052 90%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <StyledAppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              TEMPLATE DSGN
            </Typography>
            <NavButton color="inherit">ABOUT</NavButton>
            <NavButton color="inherit">DOWNLOAD</NavButton>
            <NavButton color="inherit">PRICING</NavButton>
            <NavButton color="inherit">FEATURES</NavButton>
            <NavButton color="inherit">CONTACT</NavButton>
            <Button variant="contained" color="primary" sx={{ marginLeft: '20px' }}>
              SIGN IN
            </Button>
            <IconButton color="inherit" sx={{ marginLeft: '10px' }}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </StyledAppBar>

        <Container maxWidth="lg" sx={{ mt: 8, position: 'relative', zIndex: 1 }}>
          <Typography variant="h1" component="h1" sx={{ fontWeight: 'bold', mb: 4 }}>
            Welcome.
          </Typography>
          <SearchBar
            fullWidth
            variant="outlined"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              endAdornment: (
                <IconButton>
                  <SearchIcon />
                </IconButton>
              ),
            }}
            sx={{ mb: 4 }}
          />
          <Box>
            <GradientButton variant="contained">FREE TRIAL</GradientButton>
            <Button variant="outlined" color="inherit">see more</Button>
          </Box>
          <Box sx={{ mt: 4, maxWidth: '400px' }}>
            <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
              Landing page.
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>
        </Container>

        {/* Abstract design element */}
        <Box sx={{
          position: 'absolute',
          top: '50%',
          right: '-10%',
          width: '60%',
          height: '80%',
          background: 'linear-gradient(45deg, #4a0072, #1565c0)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          opacity: 0.6,
          zIndex: 0,
        }} />
      </Box>
    </ThemeProvider>
  );
}