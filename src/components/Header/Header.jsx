import React from "react";
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from "@mui/material";
import './Header.css'

function Header() {
  return(
    <header>
      <div className="page-name">
        <HomeIcon />
        <Typography variant="h5">Home</Typography>
      </div>

      <div className="logo">
        <AlarmOnIcon />
        <Typography variant="h5">Quiz App</Typography>
      </div>

      <MenuIcon />
    </header>
  )
}

export default Header;