import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Button, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const pages = [
  {
    name: 'Home',
    link: '/'
  },

  {
    name: 'ContactUs',
    link: '/contactus'
  },
  {
    name: 'AddToCart',
    link: '/addtocart'
  }
]


function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <Box sx={{ flexGrow: 1, marginBottom: 10 }}>
      <AppBar position="fixed" sx={{ backgroundColor: 'black' }}>
        <Toolbar>
          {window.innerWidth < 800 ?
            <>
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem  key={page} onClick={handleCloseNavMenu}>
                  <Link style={{textDecoration: 'none', color: "black"}}  to={page?.link}>{page?.name}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography sx={{ textDecoration: 'none', color: 'white' }} to="/" component={Link}>Teelaunch</Typography>
            </>
            :
            <>
              <IconButton
                size="medium"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
              >
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component={Link}
                to='/'
                sx={{ flexGrow: 1, textDecoration: 'none', color: 'white' }}
              >
                Teelaunch
              </Typography>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Button href='/' key='Home' sx={{ color: '#fff' }}>
                  Home
                </Button>
                <Button href='/contactus' key='Contact' sx={{ color: '#fff' }}>
                  ContactUs
                </Button>
                <Button href='/addtocart' key='addtocart' sx={{ color: '#fff' }}>
                  AddToCart
                </Button>
              </Box>
             
            </>}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
export default Navbar