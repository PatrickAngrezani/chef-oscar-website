import { Box, Typography } from "@mui/material";
import React from "react";

const VariedFoodsSection = () => {
  return (
    <Box
      sx={{
        minHeight: "100%",
        display: "flex",
        justifyContent: "center",
        allignItens: "center",
        background: "linear-gradient(135deg, #FF4500, #FFD700, #FF6347)",
        maxWidth: "100%",
        position: "relative",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(245, 221, 171, 0.9)",
          borderRadius: "8px",
          paddingTop: "10px",
          paddingBottom: "10px",
          width: "70%",
          maxWidth: "800px",
          margin: "auto",
          marginBottom: "20px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontFamily: "Tangerine",
            color: "#4B2E2A",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Cardápio Variado{" "}
        </Typography>
      </Box>
    </Box>
  );
};

export default VariedFoodsSection;
