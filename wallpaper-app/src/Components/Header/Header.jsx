import React from "react";
import {Button, ButtonGroup} from "@mui/material"
import "./Header.css"
const Header = () => {
  return (
    <div className="header">
      <ButtonGroup className="buttonGroup" variant="text" aria-label="Basic button group">
        <Button>Wallpapers</Button>
        <Button>Orders</Button>
        <Button>Profile</Button>
      </ButtonGroup>
      <Button variant="outlined">Go To Profile</Button>
    </div>
  );
};

export default Header;
