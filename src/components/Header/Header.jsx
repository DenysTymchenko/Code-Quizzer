import React from 'react';
import CodeIcon from '@mui/icons-material/Code';
import { Typography } from '@mui/material';
import Nav from '../Nav/Default/Nav';
import NavMobile from '../Nav/Mobile/NavMobile';
import './Header.css'


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBigScreen: false
    };
  }

  componentDidMount() {
    this.updateScreenSize();
    window.addEventListener("resize", this.updateScreenSize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateScreenSize);
  }

  updateScreenSize = () => {
    this.setState({ isBigScreen: window.innerWidth >= 625 });
  }

  render() {
    return (
      <header>
        <div className='logo'>
          <Typography
            variant='h5'
            sx={{
              display:'flex',
              alignItems:'center',
              gap: '5px',
            }}
          >
            Code
            <CodeIcon />
            Quizzer
          </Typography>
        </div>
        {this.state.isBigScreen ? <Nav /> : <NavMobile />}
      </header>
    )
  }
}

export default Header;
