import React from "react";
import { Box, Typography } from "@mui/material";

import oscarChefLogo from "../assets/background/chef-oscar-logo.jpg";

const HeroSection = () => (
  <Box
    sx={{
      textAlign: "center",
      backgroundImage: `url(${oscarChefLogo})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      width: "100%",
      height: "100vh",
      paddingTop: "30px",
      color: "#fff",
    }}
  >
    {/* <Typography
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
    </Typography> */}
  </Box>
);

export default HeroSection;
