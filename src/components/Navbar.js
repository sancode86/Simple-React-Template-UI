import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

var url = `/img/logo.svg`;

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };  

  return (
  
      <Box
        className="navbar"
        sx={{
          boxShadow: 2,
          bgcolor: "background.paper",
          m: 0,
          p: 1,
        }}
      >
        <img className="logo" src={url} alt="logo" />
        <Button component={Link} to="/" variant="text">
          Home
        </Button>
        <Button component={Link} to="/about" variant="text">
          About
        </Button>
        <Button component={Link} to="/" variant="text">
          Contact
        </Button>

        <Button         
          id="demo-positioned-button"
          aria-controls="demo-positioned-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          className="dropdown"
        >
          DROPDOWN
        </Button>
        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem component={Link} to="/" onClick={handleClose}>
            Home
          </MenuItem>
          <MenuItem component={Link} to="/about" onClick={handleClose}>
            About
          </MenuItem>
          <MenuItem onClick={handleClose}>Contact</MenuItem>
        </Menu>

        <Button variant="contained">Special Link</Button>
      </Box>

  );
}
