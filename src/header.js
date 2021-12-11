import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import GoogleLoginComponent from "./googlebutton.component";
import styles from "./styles.module.css";


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <div style={styles.header}>
      <AppBar style={{ background: 'transparent', boxShadow: 'none', margin: 'Opx' }} color="primary" enableColorOnDark="true">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Restaurant Roulette
          </Typography>
          <GoogleLoginComponent />
        </Toolbar>
      </AppBar>
      </div>
    </Box>
  );
}