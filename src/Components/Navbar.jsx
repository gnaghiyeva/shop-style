import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useBasketContext } from '../context/BasketContext';

export const Navbar = () => {
  const { basket } = useBasketContext();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
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
           <ul style={{display:'flex', alignItems:'center', gap:'30px', listStyle:'none'}}>
            <li><Link style={{color:'white', textDecoration:'none'}} to='/'>Home</Link></li>
            <li><Link style={{color:'white', textDecoration:'none'}} to='/about'>About</Link></li>
            <li><Link style={{color:'white', textDecoration:'none'}} to='/add'>Add Product</Link></li>
           </ul>
          </Typography>
          <Button color="success" variant='contained'>favourites <sup style={{fontWeight:'bold',color:'red'}}>{basket.length}</sup></Button>
          <Button color="inherit"><Link style={{color:'white', textDecoration:'none'}} to='/signin'>Login </Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
