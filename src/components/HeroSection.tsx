import React from "react";
import { Box } from "@mui/material";

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
      height: "80vh",
      paddingTop: "30px",
      color: "#fff",
    }}
  ></Box>
);

export default HeroSection;
