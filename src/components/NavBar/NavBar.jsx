import css from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const NavBar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toHome = () => {
    navigate("/");
    handleClose();
  };

  const toCatalog = () => {
    navigate("/catalog");
    handleClose();
  };

  const toFavorite = () => {
    navigate("/favorites");
    handleClose();
  };

  return (
    <div style={{ borderBottom: "1px solid black" }}>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: "red", marginLeft: "20px" }}
      >
        Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={toHome}>Home Page</MenuItem>
        <MenuItem onClick={toCatalog}>Catalog</MenuItem>
        <MenuItem onClick={toFavorite}>Favorite</MenuItem>
      </Menu>
    </div>
  );
};

export default NavBar;