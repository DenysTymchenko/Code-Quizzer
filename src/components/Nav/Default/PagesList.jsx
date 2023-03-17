import {List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function PagesList() {
  const pages = ['Home', 'Quizzes', 'Other'];
  const icons = [<HomeIcon/>, <FactCheckIcon/>, <MoreHorizIcon/>];
  
  return (
    <List>
      {pages.map((page, index) => (
        <ListItem key={page} disablePadding>
          <ListItemButton>
            <ListItemIcon sx={{color: 'white'}}>
              {icons[index]}
            </ListItemIcon>
            <ListItemText primary={page}/>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}

export default PagesList;
