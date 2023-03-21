import React from 'react';
import { Button, Drawer, Box, } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import '../Nav.css';
import PagesList from "./PagesList";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
    this.setOpen = this.setOpen.bind(this);
  }
  
  setOpen(state) {
    this.setState({
      open: state,
    });
  }

  render() {
    return (
      <nav>
        <Button
          onClick={() => this.setOpen(true)}
          sx={{color: 'white'}}
        >
          <MenuIcon/>
        </Button>
        <Drawer
          anchor='right'
          open={this.state.open}
          onClose={() => this.setOpen(false)}
        >
          <Box
            role="presentation"
            onClick={() => this.setOpen(false)}
            onKeyDown={() => this.setOpen(false)}
            sx={{
              height: '100%',
              backgroundColor: '#252422',
              color: 'white',
            }}
          >
            <PagesList/>
          </Box>
        </Drawer>
      </nav>
    )
  }
}

export default Nav;
