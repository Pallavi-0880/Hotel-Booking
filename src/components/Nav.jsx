import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';

const Nav=()=> {
   return (
    <Box sx={{ flexGrow: 1 }}>      
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
           Booking.com
          </Typography>
          <AccountCircle />
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Nav