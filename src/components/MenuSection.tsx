import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import imgAlaminuta from "../assets/alaminuta.jpeg";
import imgCalzone from "../assets/calzone.jpg";
import imgChurrasquinho from "../assets/churrasquinho.jpeg";
import imgPizza from "../assets/pizza.jpeg";
import imgPratoFeito from "../assets/prato-feito.jpg";
import imgXisPizza from "../assets/xis-pizza.jpeg";
import imgXis from "../assets/xis.jpeg";

interface MenuItems {
  name: string;
  image: string;
}

const dayMenuItems: MenuItems[] = [
  { name: "Ala Minuta", image: imgAlaminuta },
  { name: "Prato Feito", image: imgPratoFeito },
];

const nightMenuItems: MenuItems[] = [
  { name: "Ala Minuta", image: imgAlaminuta },
  { name: "Calzone", image: imgCalzone },
  { name: "Churrasquinho", image: imgChurrasquinho },
  { name: "Pizza", image: imgPizza },
  { name: "Xis Pizza", image: imgXisPizza },
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
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box sx={{ ...sectionTitleStyle }}>Refeições ao Dia</Box>
        <Box sx={{ ...sectionTitleStyle }}>Refeições à Noite</Box>
      </Box>

      <Box display="flex" justifyContent="space-between" mt={2}>
        <Grid container spacing={2} xs={6}>
          {dayMenuItems.map((item, index) => (
            <Grid item xs={6} key={index}>
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

        <Grid container spacing={2} xs={6}>
          {nightMenuItems.map((item, index) => (
            <Grid item xs={6} key={index}>
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
    </Box>
  );
};

export default Menu;
