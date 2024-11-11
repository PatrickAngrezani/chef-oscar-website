import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

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
        >
          Pizza
        </Button>
        <Button
          color="inherit"
          sx={{ mx: 1 }}
          style={{
            fontFamily: "Tangerine",
            fontSize: ".9vw",
          }}
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
        >
          Xis
        </Button>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;
