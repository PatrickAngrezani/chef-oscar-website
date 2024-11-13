import { Box, List, ListItem, Typography } from "@mui/material";
import React from "react";
import pizzaRoute from "../assets/pizza-bg-route.png";

interface Pizza {
  name: string;
  description: string;
  image?: string;
  observation?: string;
}

const savoryFlavors: Pizza[] = [
  {
    name: "Bacon",
    description: "Ingredientes",
    observation: "",
  },
  {
    name: "Basca",
    description: "Ingredientes",
    observation: "",
  },
  {
    name: "Calabresa",
    description: "Ingredientes",
    observation: "Temos também Calabresa c/ Cebola",
  },
  {
    name: "Calabresa Forte",
    description: "Ingredientes",
    observation: "",
  },
  {
    name: "Champgon",
    description: "Ingredientes",
    observation: "Temos também Champgnon c/ Frango",
  },
  {
    name: "Coração",
    description: "Ingredientes",
    observation: "",
  },
  {
    name: "De Panela",
    description: "Ingredientes",
    observation: "Temos também ao molho Alho e Óleo",
  },
  {
    name: "Lombo",
    description: "Ingredientes",
    observation: "Temos também c/ Abacaxi ou Catupiry",
  },
  {
    name: "Mafiosa",
    description: "Ingredientes",
    observation: "",
  },
  {
    name: "Milho",
    description: "Ingredientes",
    observation: "Temos também c/ Bacon",
  },
  {
    name: "Moda da Casa",
    description: "Ingredientes",
    observation: "",
  },
  {
    name: "Siciliana",
    description: "Ingredientes",
    observation: "",
  },
  {
    name: "Strogonoff",
    description: "Ingredientes",
    observation: "",
  },
  {
    name: "Suprema",
    description: "Ingredientes",
    observation: "",
  },
  {
    name: "Toscana",
    description: "Ingredientes",
    observation: "",
  },
  {
    name: "Quatro Queijos",
    description: "Ingredientes",
    observation: "",
  },
  {
    name: "Cinco Quejos",
    description: "Ingredientes",
    observation: "",
  },
  {
    name: "Seis Quejos",
    description: "Ingredientes",
    observation: "",
  },
];

const PizzaSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${pizzaRoute})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        padding: "20px",
        "::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "8px",
          padding: "20px",
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <Typography
          variant="h1"
          style={{
            fontFamily: "Tangerine",
            fontSize: "2.5rem",
            marginBottom: "15px",
            color: "#4B2E2A",
            fontWeight: "bold",
          }}
        >
          Pizzas Salgadas
        </Typography>
        <List sx={{ paddingLeft: 2 }}>
          {savoryFlavors.map((savoryFlavor, index) => (
            <ListItem
              key={index}
              sx={{
                paddingLeft: 0,
                display: "flex",
                alignItems: "center",
                marginBottom: 1,
                "&:hover": {
                  backgroundColor: "#FFF5CC",
                  borderRadius: 1,
                },
              }}
            >
              {/* Image thumbnail */}
              <Box
                component="img"
                src={savoryFlavor.image}
                alt={savoryFlavor.name}
                sx={{
                  width: 75,
                  height: 75,
                  borderRadius: "50%",
                  marginRight: 2,
                }}
              />

              {/* Text content */}
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
                    {savoryFlavor.name}:
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      color: "#666633",
                      fontFamily: "Tangerine",
                      marginLeft: 1,
                      fontSize: "1.25rem",
                    }}
                  >
                    {savoryFlavor.description}
                  </Typography>
                </Box>

                {/* Observation, if any */}
                {savoryFlavor.observation && (
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#8B5E3C",
                      fontFamily: "Tangerine",
                      marginLeft: 2,
                      fontSize: "1.02rem",
                      fontWeight: "bold",
                    }}
                  >
                    * {savoryFlavor.observation}
                  </Typography>
                )}
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default PizzaSection;
