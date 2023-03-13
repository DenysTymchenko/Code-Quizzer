import React from "react";
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from "@mui/material";
import './Header.css'

function Header() {
  return(
    <header>
      <div className="wrapper">
        <AlarmOnIcon />
        <Typography variant="h5">Quiz App</Typography>
      </div>

      <MenuIcon />
    </header>
  )
}

export default Header;