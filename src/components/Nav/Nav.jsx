import React from "react";
import "./Nav.css"
import Button from '@mui/material/Button';
import HomeIcon from "@mui/icons-material/Home";
import FactCheckIcon from '@mui/icons-material/FactCheck';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Nav() {
  const pages = ['Home', 'Quizzes', 'Other'];
  const icons = [<HomeIcon/>, <FactCheckIcon/>, <MoreHorizIcon/>];

  return (
    <nav>
      {pages.map((page, index) => (
        <Button
          key={index}
          variant="outlined"
          sx={{
            display: 'flex',
            gap: '10px',
            color: 'white',
            borderColor: '#F7EC59',
            "&:hover": {
              borderColor: '#FEC601',
            }
          }}
        >
          {icons[index]}{page}
        </Button>
      ))}
    </nav>
  )
}

export default Nav;