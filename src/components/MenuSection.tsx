import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import imgAlaminuta from "../assets/alaminuta.jpeg";
import imgBauru from "../assets/menu-online/varied-foods/bauru.png";
import imgCachorroquente from "../assets/menu-online/varied-foods/cachorro-quente.jpeg";
import imgParmegiana from "../assets/menu-online/varied-foods/parmegiana.jpg";
import imgPizza from "../assets/pizza.jpeg";
import imgPratoFeito from "../assets/prato-feito.jpg";
import imgXis from "../assets/xis.jpeg";

interface MenuItems {
  name: string;
  image: string;
}

const menuItems: MenuItems[] = [
  { name: "Ala Minuta", image: imgAlaminuta },
  { name: "Bauru", image: imgBauru },
  { name: "Cachorro-Quente", image: imgCachorroquente },
  { name: "Parmegiana", image: imgParmegiana },
  { name: "Prato Feito", image: imgPratoFeito },
  { name: "Pizza", image: imgPizza },
  { name: "Xis", image: imgXis },
];

const Menu = () => {
  const menuBoxStyle = {
    position: "relative",
    overflow: "hidden",
    borderRadius: "8px",
    fontFamily: "Playfair",
  };

  const nameOverlayStyle = {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: "4px",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "#fff",
    textAlign: "center",
    fontSize: "0.9rem",
  };

  const sectionTitleStyle = {
    color: "rgba(139, 69, 19, 1)",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "1.7rem",
    fontFamily: "Playfair",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
  };

  return (
    <Box
      sx={{
        padding: "20px",
        backgroundColor: "rgb(245, 241, 230)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        textAlign="center"
        sx={{
          fontFamily: "Playfair",
          fontWeight: "bold",
          fontSize: "2.5vw",
          color: "#FFC300",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 1.2)",
        }}
      >
        Nosso Menu
      </Typography>
      <Box sx={{ ...sectionTitleStyle, marginBottom: "20px" }}>
        Pratos Principais
      </Box>

      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{ maxWidth: "900px" }}
      >
        {menuItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box sx={menuBoxStyle}>
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                }}
              />
              <Box sx={nameOverlayStyle}>{item.name}</Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Menu;
