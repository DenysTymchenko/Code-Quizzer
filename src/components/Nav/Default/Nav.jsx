import React, { useState } from 'react';
import { Button, Drawer, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import '../Nav.css';
import PagesList from './PagesList';

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <Button
        onClick={() => setOpen(true)}
        sx={{ color: 'var(--secondary-alt)' }}
      >
        <MenuIcon />
      </Button>
      <Drawer
        anchor='right'
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box
          role="presentation"
          onClick={() => setOpen(false)}
          onKeyDown={() => setOpen(false)}
          sx={{
            height: '100%',
            backgroundColor: 'var(--secondary)',
            color: 'var(--secondary-alt)',
          }}
        >
            <PagesList />
        </Box>
      </Drawer>
    </nav>
  );
}

export default Nav;
