import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { Typography } from '@mui/material';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <Typography variant='body1'>Created by: Denys Tymchenko</Typography>
      <div className='socials'>
        <a href='https://github.com/DenysTymchenko'>
          <GitHubIcon />
        </a>
        <a href='https://t.me/DenysTymchenko'>
          <TelegramIcon />
        </a>
        <a href='mailto:tymchenko.denys@gamil.com'>
          <EmailIcon />
        </a>
        <a href='https://www.linkedin.com/in/denys-tymchenko-0031b1251/'>
          <LinkedInIcon />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
