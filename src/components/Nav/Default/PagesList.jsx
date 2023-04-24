import React from 'react';
import { Link } from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

function PagesList({ pages, links, icons }) {
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
