import React from 'react';


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import Header from './Header';
import { useState } from 'react';
import Itemdata from './Itemdata';
import { Link } from 'react-router-dom'

import { useNavigate } from "react-router-dom";

function Navbar(props) {
  const [cart, setCart] = useState([])

  const navigate = useNavigate();
  


  return (
    <>


      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>

            <Typography variant="h6" align='start' component="div" sx={{ flexGrow: 1 }}>
              Welcome to The Big Fat Indian Resto
            </Typography>



            <IconButton onClick={() => props.handleShow(true)}
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
            >
              <ShoppingCartIcon />
              <Badge badgeContent={props.count} color="error"></Badge>
            </IconButton>
          {/* <Button variant='contained'  color="success"  sx={{m: 1, p: 1}} onClick={() => props.handleShow(false)}   >Menu</Button> */}
          <Link to='/Products/add'><Button variant='contained'  color="success"  sx={{m: 1, p: 1}}    >Add Product</Button></Link>
          <Link to='/Logout'><Button  variant='contained'  color="success"    >Log Out</Button></Link>
          </Toolbar>
        </AppBar>
      </Box>


    </>

  );
}



export default Navbar;

  
            
           
         
            