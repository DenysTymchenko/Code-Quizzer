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
        sx={{ color: 'white' }}
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
            backgroundColor: '#252422',
            color: 'white',
          }}
        >
            <PagesList />
        </Box>
      </Drawer>
    </nav>
  );
}

export default Nav;
