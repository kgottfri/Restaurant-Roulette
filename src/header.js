import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import GoogleLoginComponent from "./googlebutton.component";
import styles from "./styles.module.css";
import Menu from "@mui/material/Menu";
import MenuItem from '@mui/material/MenuItem';
import Home from './home.js';
import Random from './random.js'
import {
    Link,
    Outlet,
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";

export default function ButtonAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

//Open and Close Nav handle header app bar menu 
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <Box sx={{ flexGrow: 1 }}>
    <div style={styles.header}>
      <AppBar style={{ background: 'transparent', boxShadow: 'none', margin: '2px'}} position="static" color="primary">
        <Toolbar>
        <Box sx={{flexGrow: 1, display: { sx: 'flex'} }}>
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
                display: { xs: 'block'},
              }}
            >
                <MenuItem key="Home" to="/" onClick={handleCloseNavMenu}>
                  <Link to="/"> Home</Link>
                </MenuItem>
                <MenuItem key="Random" to="/random" onClick={handleCloseNavMenu} >
                  <Link to="/random"> Random </Link>
                </MenuItem>
            </Menu>
          </Box>
          <GoogleLoginComponent />
        </Toolbar>
      </AppBar>
      <Outlet />
      </div>
    </Box>
  );

};

