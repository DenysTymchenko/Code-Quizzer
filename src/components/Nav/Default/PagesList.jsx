import React from 'react';
import { Link } from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import StarIcon from '@mui/icons-material/Star';
import CreateIcon from '@mui/icons-material/Create';

function PagesList() {
  const pages = ['Home', 'Quizzes', 'Favorites', 'Create'];
  const links = ['/', '/quizzes', '/favorites', '/create'];
  // eslint-disable-next-line react/jsx-key
  const icons = [<HomeIcon />, <FactCheckIcon />, <StarIcon />, <CreateIcon />];

  return (
    <List>
      {pages.map((page, index) => (
        <Link key={page} to={links[index]}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: 'var(--secondary-alt)' }}>
                {icons[index]}
              </ListItemIcon>
              <ListItemText primary={page} />
            </ListItemButton>
          </ListItem>
        </Link>
      ))}
    </List>
  );
}

export default PagesList;
