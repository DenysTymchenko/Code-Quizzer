import React from 'react';
import { Link } from 'react-router-dom';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { Typography, useMediaQuery } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import StarIcon from '@mui/icons-material/Star';
import CreateIcon from '@mui/icons-material/Create';
import Nav from '../Nav/Default/Nav';
import NavMobile from '../Nav/Mobile/NavMobile';
import './Header.css';

function Header() {
  const pages = ['Home', 'Quizzes', 'Favorites', 'Create'];
  const links = ['/', '/quizzes', '/favorites', '/create'];
  // eslint-disable-next-line react/jsx-key
  const icons = [<HomeIcon />, <FactCheckIcon />, <StarIcon />, <CreateIcon />];

  const isBigScreen = useMediaQuery('(min-width:625px)');

  return (
    <header>
      <Link to='/'>
        <div className="logo">
          <Typography variant="h5">
            C<AccessAlarmIcon />de Quizzer
          </Typography>
        </div>
      </Link>
      {isBigScreen
        ? <Nav
          pages={pages}
          links={links}
          icons={icons}
        />
        : <NavMobile
          pages={pages}
          links={links}
          icons={icons}
        />}
    </header>
  );
}

export default Header;
