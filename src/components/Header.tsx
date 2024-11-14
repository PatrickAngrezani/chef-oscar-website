import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => (
  <AppBar position="static" sx={{ backgroundColor: "#FF4500" }}>
    <Toolbar>
      <Typography
        variant="h6"
        sx={{ flexGrow: 1 }}
        style={{
          fontFamily: "Tangerine",
          fontSize: "1.3vw",
          fontStyle: "italic",
        }}
      >
        Oscar Chef
      </Typography>
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
