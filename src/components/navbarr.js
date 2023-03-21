import React from 'react';


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'


function Navbarr() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h3" align='center' fontFamily="Hanalei Fill" component="div" sx={{ flexGrow: 1 }}>
            Welcome to The Big Fat Indian Resto
          </Typography>
          {/* <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ShoppingCartIcon />
          </IconButton> */}
          <Link to='/login'><Button color="inherit" >Sign In</Button></Link>
          <Link to='/Registration'><Button color="inherit">Sign Up</Button></Link>
          <Link to='/About'><Button color="inherit">About</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}



export default Navbarr;

