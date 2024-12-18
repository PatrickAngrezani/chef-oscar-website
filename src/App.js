import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import HeroSection from "./components/HeroSection.tsx";
import MenuSection from "./components/MenuSection.tsx";
import ContactSection from "./components/ContactSection.tsx";
import Header from "./components/Header.tsx";
import SavoryPizzaSection from "./components/SavoryPizzaSection.tsx";
import SweetPizzaSection from "./components/SweetPizzaSection.tsx";
import { XisSection } from "./components/XisSection.tsx";
import VariedFoodsSections from "./components/VariedFoodsSection.tsx";
import ExportToPDFRoute from "./components/ExportToPDF.tsx";

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
          <Route path="/pizzas-salgadas" element={<SavoryPizzaSection />} />
          <Route path="/pizzas-doces" element={<SweetPizzaSection />} />
          <Route path="/pratos-variados" element={<VariedFoodsSections />} />
          <Route path="/xis" element={<XisSection />} />
          <Route path="/export-pdf" element={<ExportToPDFRoute />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
