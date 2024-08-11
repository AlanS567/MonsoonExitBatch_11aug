import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#a63d9b' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          EmployeeApp
        </Typography>
        <IconButton color="inherit" component={Link} to="/">
          <HomeIcon />
        </IconButton>
        <IconButton color="inherit" component={Link} to="/add">
          <AddBoxIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
