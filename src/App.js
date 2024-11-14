import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import HeroSection from "./components/HeroSection.tsx";
import MenuSection from "./components/MenuSection.tsx";
import ContactSection from "./components/ContactSection.tsx";
import Header from "./components/Header.tsx";
import SavoryPizzaSection from "./components/SavoryPizzaSection.tsx"

function App() {
  return (
    <Router>
      <Box
        sx={{
          fontFamily: "Tangerine, sans-serif",
          backgroundColor: "#fafafa",
        }}
      >
        <CssBaseline />
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <div>
                  <HeroSection />
                </div>
                <div>
                  <MenuSection />
                </div>
                <div>
                  <ContactSection />
                </div>
              </>
            }
          />
          <Route path="/pizza" element={<SavoryPizzaSection /> }/>
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
