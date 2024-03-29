import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function NavMobile({ pages, links, icons }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav>
      <Button
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ color: 'var(--secondary-alt)' }}
      >
        <MenuIcon />
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        PaperProps={{
          style: {
            backgroundColor: 'var(--secondary)',
            color: 'white',
          },
        }}
      >
        {pages.map((page, index) => (
          <Link to={links[index]} key={page}>
            <MenuItem
              key={page}
              onClick={handleClose}
              sx={{
                display: 'flex',
                gap: '10px',
              }}
            >
              {icons[index]}{page}
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </nav>
  );
}

export default NavMobile;
