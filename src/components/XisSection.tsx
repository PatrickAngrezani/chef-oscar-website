import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import oscarLogo from "../assets/background/chef-oscar-logo.jpg";

import XBacon from "../assets/menu-online/xis/xis-bacon.jpeg";
import XCalabresa from "../assets/menu-online/xis/xis-calabresa.jpeg";
import XCoracao from "../assets/menu-online/xis/xis-coracao.jpg";
import XFrango from "../assets/menu-online/xis/xis-frango.jpeg";
import XSalada from "../assets/menu-online/xis/xis-salada.jpeg";
import XStrogonoff from "../assets/menu-online/xis/xis-strogonoff.jpeg";
import XVegetariano from "../assets/menu-online/xis/xis-vegetariano.jpg";

const xisFlavors = [
  {
    name: "Xis Bacon",
    description:
      "Hambúrguer bovino, bacon frito, queijo muçarela, alface, tomate, maionese, ketchup, mostarda, milho e ervilha.",
    image: XBacon,
  },
  {
    name: "Xis Calabresa",
    description:
      " Calabresa frita, queijo muçarela, alface, tomate, maionese, ketchup, mostarda, milho e ervilha.",
    image: XCalabresa,
  },
  {
    name: "Xis Coração",
    description:
      "Coração de frango, queijo muçarela, alface, tomate, maionese, ketchup, mostarda, milho e ervilha.",
    image: XCoracao,
  },
  {
    name: "Xis Frango",
    description:
      "Frango em cubos, queijo muçarela, alface, tomate, maionese, ketchup, mostarda, milho e ervilha.",
    image: XFrango,
  },
  {
    name: "Xis Salada",
    description:
      "Hambúrguer bovino, queijo muçarela, alface, tomate, cebola, maionese, ketchup, mostarda, milho e ervilha.",
    image: XSalada,
  },
  {
    name: "Xis Strogonoff",
    description:
      "Strogonoff de carne, batata palha, queijo muçarela, alface, tomate, cebola, maionese, ketchup, mostarda, milho e ervilha.",
    image: XStrogonoff,
  },
  {
    name: "Xis Vegetariano",
    description:
      "Hambúrguer vegetariano (proteína de soja), alface, tomate, maionese(vegetal), ketchup, mostarda, milho e ervilha.",
    image: XVegetariano,
  },
];

const XisSection = () => {
  return (
    <Box
      sx={{
        backgroundAttachment: "fixed",
        backgroundImage: `url(${oscarLogo})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        padding: "20px",
        minHeight: "100vh",
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
          Cardápio de Xis
        </Typography>

        <List>
          {xisFlavors.map((flavor, index) => (
            <ListItem
              key={index}
              sx={{ padding: "20px 0", alignItems: "flex-start" }}
            >
              <ListItemAvatar>
                <Avatar
                  src={flavor.image || "https://via.placeholder.com/75"}
                  alt={flavor.name}
                  variant="rounded"
                  sx={{
                    marginLeft: "20px",
                    width: 75,
                    height: 75,
                    marginRight: "15px",
                    borderRadius: "8px",
                  }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#4B2E2A",
                      fontWeight: "bold",
                      fontFamily: "Tangerine",
                      fontSize: "1.5rem",
                    }}
                  >
                    {flavor.name}
                  </Typography>
                }
                secondary={
                  <Typography
                    variant="body2"
                    sx={{
                      color: "black",
                      fontFamily: "Tangerine",
                      marginLeft: 1,
                      fontSize: "1.00rem",
                      maxHeight: "6rem",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 3,
                    }}
                  >
                    {flavor.description}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default XisSection;
