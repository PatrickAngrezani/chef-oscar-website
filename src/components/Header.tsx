import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => (
  <AppBar position="static" sx={{ backgroundColor: "#FF4500" }}>
    <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
      <Button
        color="inherit"
        style={{
          textAlign: "left",
          fontFamily: "Tangerine",
          fontSize: "1.3vw",
          fontStyle: "italic",
          minWidth: "unset",
          textTransform: "none",
        }}
        component={Link}
        to="/"
      >
        Oscar Chef
      </Button>
      <Box>
        <Button
          color="inherit"
          sx={{ mx: 1 }}
          style={{
            fontFamily: "Tangerine",
            fontSize: ".9vw",
          }}
          component={Link}
          to="/calzone"
        >
          Calzone
        </Button>
        <Button
          color="inherit"
          sx={{ mx: 1 }}
          style={{
            fontFamily: "Tangerine",
            fontSize: ".9vw",
          }}
          component={Link}
          to="/pizzas-salgadas"
        >
          Pizzas Salgadas
        </Button>
        <Button
          color="inherit"
          sx={{ mx: 1 }}
          style={{
            fontFamily: "Tangerine",
            fontSize: ".9vw",
          }}
          component={Link}
          to="/pizzas-doces"
        >
          Pizzas Doces
        </Button>
        <Button
          color="inherit"
          sx={{ mx: 1 }}
          style={{
            fontFamily: "Tangerine",
            fontSize: ".9vw",
          }}
          component={Link}
          to="/xis-pizza"
        >
          Xis Pizza
        </Button>
        <Button
          color="inherit"
          sx={{ mx: 1 }}
          style={{
            fontFamily: "Tangerine",
            fontSize: ".9vw",
          }}
          component={Link}
          to="/xis"
        >
          Xis
        </Button>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;
