import React from "react";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#FF4500" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          color="inherit"
          style={{
            textAlign: "left",
            fontFamily: "Tangerine",
            fontSize: isMobile ? "1.5rem" : "1.5vw",
            fontStyle: "italic",
            minWidth: "unset",
            textTransform: "none",
          }}
          component={Link}
          to="/"
        >
          Oscar Chef
        </Button>
        {isMobile ? (
          // Mobile Menu
          <>
            <IconButton
              color="inherit"
              edge="end"
              onClick={handleMenuOpen}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem
                onClick={handleMenuClose}
                component={Link}
                to="/pratos-variados"
                sx={{ fontFamily: "Tangerine", fontSize: "1.2rem" }}
              >
                Pratos Variados
              </MenuItem>
              <MenuItem
                onClick={handleMenuClose}
                component={Link}
                to="/xis"
                sx={{ fontFamily: "Tangerine", fontSize: "1.2rem" }}
              >
                Xis
              </MenuItem>
            </Menu>
          </>
        ) : (
          // Desktop Menu
          <Box>
            <Button
              color="inherit"
              sx={{ mx: 1 }}
              style={{
                fontFamily: "Tangerine",
                fontSize: "1.1vw",
                textTransform: "none",
              }}
              component={Link}
              to="/pratos-variados"
            >
              Pratos Variados
            </Button>
            <Button
              color="inherit"
              sx={{ mx: 1 }}
              style={{
                fontFamily: "Tangerine",
                fontSize: "1.1vw",
                textTransform: "none",
              }}
              component={Link}
              to="/xis"
            >
              Xis
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
