import { Box, List, ListItem, Typography } from "@mui/material";
import React from "react";

import oscarLogo from "../assets/background/chef-oscar-logo.jpg";

import bauruImg from "../assets/menu-online/varied-foods/bauru.png";
import calzoneImg from "../assets/menu-online/varied-foods/calzone.jpg";
import farfalleImg from "../assets/menu-online/varied-foods/farfalle-macarrao.jpg";
import iscaPeixeImg from "../assets/menu-online/varied-foods/isca-peixe.jpg";
import xpizzaImg from "../assets/menu-online/varied-foods/xis-pizza.jpeg";
import pratoFit from "../assets/menu-online/varied-foods/fit.png";
import sanduiche from "../assets/menu-online/varied-foods/sanduiche-com-massa.jpg";
import sanduiche2 from "../assets/menu-online/varied-foods/sanduiche-2.jpg";

interface Food {
  name: string;
  description;
  image: string;
  observation?: string;
}

const VariedFoods: Food[] = [
  {
    name: "Baurú",
    description:
      "Bife de alcatra, presunto, ovo, maionese a gosto, queijo, tomate e alface",
    image: bauruImg,
    observation: "Pimenta a gosto",
  },
  {
    name: "Calzone",
    description: "Peça nos mesmos sabores conforme o Cardápio de Pizza",
    image: calzoneImg,
  },
  {
    name: "Farfalle",
    description:
      "Macarrão de trigo com almondegas assadas de filé de Frango em Molho de tomate e salada na tigela.",
    image: farfalleImg,
  },
  {
    name: "Iscas de Peixe",
    description: "Ao Molho Tártaro",
    image: iscaPeixeImg,
  },
  {
    name: "Prato Fit",
    description: "Ingredientes",
    image: pratoFit,
  },
  {
    name: "Sanduiche",
    description: "Ingredientes",
    image: sanduiche,
  },
  {
    name: "Sanduiche 2",
    description: "Ingredientes",
    image: sanduiche2,
  },
  {
    name: "XPizza",
    description: "Peça nos mesmos sabores conforme o Cardápio de Pizza",
    image: xpizzaImg,
  },
];

const VariedFoodsSection = () => {
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
          Cardápio Variado{" "}
        </Typography>

        <List>
          {VariedFoods.map((food: Food, index) => (
            <ListItem
              key={index}
              sx={{
                paddingLeft: 0,
                display: "flex",
                alignItems: "center",
                marginBottom: 1,
              }}
            >
              <Box
                component="img"
                src={food.image}
                alt={food.name}
                sx={{
                  marginLeft: "20px",
                  width: "80px",
                  height: "80px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginRight: "20px",
                  flexShrink: 0,
                }}
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    sx={{
                      color: "#4B2E2A",
                      fontWeight: "bold",
                      fontFamily: "Tangerine",
                      fontSize: "1.75rem",
                    }}
                  >
                    {food.name}:
                  </Typography>
                  <Box sx={{}}>
                    <Typography
                      component="span"
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
                      {food.description}
                    </Typography>
                    {/* Observation, if any */}
                    {food.observation && (
                      <Typography
                        variant="caption"
                        sx={{
                          color: "#8B5E3C",
                          fontFamily: "Tangerine",
                          marginLeft: 2,
                          fontSize: "0.90rem",
                          fontWeight: "bold",
                        }}
                      >
                        * {food.observation}
                      </Typography>
                    )}
                  </Box>
                </Box>
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default VariedFoodsSection;
