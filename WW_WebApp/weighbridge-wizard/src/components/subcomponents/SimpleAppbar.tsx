import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const SimpleAppBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Your App Name
        </Typography>
        <Button color="inherit">About</Button>
        <Button color="inherit">Sign In</Button>        
      </Toolbar>
    </AppBar>
  );
};

export default SimpleAppBar;
