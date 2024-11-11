import React from "react";
import { Box, CssBaseline } from "@mui/material";
import HeroSection from "./components/HeroSection.tsx";
import MenuSection from "./components/MenuSection.tsx";
import ContactSection from "./components/ContactSection.tsx";
import Header from "./components/Header.tsx";
import pizzaBG from "./assets/pizza-background.png";

function App() {
  return (
    <Box
      sx={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#fafafa",
      }}
    >
      <CssBaseline />
      <Header />
      <HeroSection />
      <MenuSection />
      <ContactSection />
    </Box>
  );
}

export default App;
