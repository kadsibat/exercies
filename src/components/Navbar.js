import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import IconButton from '@mui/material/IconButton';

import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const navigate =useNavigate()
   
  return (
  
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
    <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 2rem",
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 0 }}
            onClick={()=>navigate("/")}
          >
            CONTEXT
          </IconButton>
          <Box>
          <Button onClick={() => navigate("/")} color="inherit">login</Button>
          <Button onClick={() => navigate("/about")} color="inherit">register</Button>

          </Box>
        </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar
