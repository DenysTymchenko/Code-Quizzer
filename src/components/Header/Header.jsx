import React from 'react';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { Typography, useMediaQuery } from '@mui/material';
import Nav from '../Nav/Default/Nav';
import NavMobile from '../Nav/Mobile/NavMobile';
import './Header.css'


function Header() {
  const isBigScreen = useMediaQuery('(min-width:625px)');

  return (
    <header>
      <div className='logo'>
        <AccessAlarmIcon />
        <Typography variant='h5'>Quiz App</Typography>
      </div>
      {isBigScreen ? <Nav /> : <NavMobile />}
    </header>
  )
}

export default Header;
