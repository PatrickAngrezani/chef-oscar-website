import React from "react";
import { Box, Typography } from "@mui/material";

import pizzaBG from "../assets/background/pizza-background.png";

const HeroSection = () => (
  <Box
    sx={{
      textAlign: "center",
      backgroundImage: `url(${pizzaBG})`,
      backgroundSize: "cover",
      backgroundPosition: "center center",
      padding: "100px 20px",
      paddingTop: "30px",
      color: "#fff",
    }}
  >
    <Typography
      variant="h2"
      sx={{
        fontWeight: "bold",
        color: "#ff9800",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 1.2)",
        fontFamily: "Tangerine",
        fontSize: "7vw",
      }}
    >
      Oscar Chef
    </Typography>
    <Typography
      variant="h5"
      sx={{
        marginTop: 2,
        textShadow: "2px 2px 4px rgba(0, 0, 0, 1.2)",
        fontFamily: "Tangerine",
        fontSize: "2vw",
        color: "#f0f0f0",
      }}
    >
      Sabor e Qualidade Diariamente
    </Typography>
  </Box>
);

export default HeroSection;
