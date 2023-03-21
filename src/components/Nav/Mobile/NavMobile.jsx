import React from 'react';
import {
  Button,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

class NavMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick(event) {
    this.setState({
      anchorEl: event.currentTarget,
    });
  }

  handleClose() {
    this.setState({
      anchorEl: null,
    });
  }

  render() {
    const pages = ['Home', 'Quizzes', 'Other'];
    const icons = [<HomeIcon/>, <FactCheckIcon/>, <MoreHorizIcon/>];
    
    const open = Boolean(this.state.anchorEl);

    return (
      <nav>
        <Button
          id='basic-button'
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          onClick={this.handleClick}
          sx={{color: 'white'}}
        >
          <MenuIcon />
        </Button>
        <Menu
          id='basic-menu'
          anchorEl={this.state.anchorEl}
          open={open}
          onClose={this.handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          PaperProps={{
            style: {
              backgroundColor: '#252422',
              color: 'white',
            }
          }}
        >
          {pages.map((page, index) => (
            <MenuItem
              key={index}
              onClick={this.handleClose}
              sx={{
                display: 'flex',
                gap: '10px',
              }}
            >
              {icons[index]}{page}
            </MenuItem>
          ))}
        </Menu>
      </nav>
    )
  }
}

export default NavMobile;
