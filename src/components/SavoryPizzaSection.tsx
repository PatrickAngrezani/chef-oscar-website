import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import pizzaRoute from "../assets/background/pizza-bg-route.png";

import pizzaBacon from "../assets/menu-online/pizza/pizza-bacon.jpeg";
import pizzaBasca from "../assets/menu-online/pizza/pizza-basca.jpg";
import pizzaCalabresa from "../assets/menu-online/pizza/pizza-calabresa.jpeg";
import pizzaCalabresaForte from "../assets/menu-online/pizza/pizza-calabresa-forte.png";
import pizzaChampignon from "../assets/menu-online/pizza/pizza-champignon.jpeg";
import pizzaCoracao from "../assets/menu-online/pizza/coracao-ao-molho.jpeg";
import pizzaDPanela from "../assets/menu-online/pizza/pizza-depanela.png";
import pizzaLombo from "../assets/menu-online/pizza/pizza-lombo.jpeg";
import pizzaMafiosa from "../assets/menu-online/pizza/pizza-mafiosa.jpeg";
import pizzaMilho from "../assets/menu-online/pizza/pizza-milho.jpeg";
import pizzaModaCasa from "../assets/menu-online/pizza/pizza-moda-da-casa.png";
import pizzaSiciliana from "../assets/menu-online/pizza/pizza-siciliana.png";
import pizzaStrogonoff from "../assets/menu-online/pizza/pizza-strogonoff.png";
import pizzaSuprema from "../assets/menu-online/pizza/pizza-suprema.png";
import pizzaToscana from "../assets/menu-online/pizza/pizza-toscana.png";
import pizza4Queijos from "../assets/menu-online/pizza/pizza-4-queijos.jpeg";
import pizza5Queijos from "../assets/menu-online/pizza/pizza-5-queijos.jpeg";
import pizza6Queijos from "../assets/menu-online/pizza/pizza-6-queijos.png";

interface Pizza {
  name: string;
  description?: string;
  image?: string;
  observation?: string;
}

const savoryFlavors: Pizza[] = [
  {
    name: "Bacon",
    description: "Bacon, Tomate em rodelas e Azeitonas",
    image: pizzaBacon,
  },
  {
    name: "Basca",
    description: "Bacon, Tomate em rodelas, Catupiry e Parmesão",
    image: pizzaBasca,
  },
  {
    name: "Calabresa",
    description: "Calabresa Fraca",
    image: pizzaCalabresa,
    observation: "Temos também Calabresa c/ Cebola",
  },
  {
    name: "Calabresa Forte",
    image: pizzaCalabresaForte,
  },
  {
    name: "Champignon",
    description: "Champignon e Presunto",
    image: pizzaChampignon,
    observation: "Temos também Champgnon c/ Frango",
  },
  {
    name: "Coração",
    description: "Coração ao molho",
    image: pizzaCoracao,
  },
  {
    name: "D'Panela",
    description: "Carne de Panela desfiada",
    observation: "Temos também ao molho Alho e Óleo",
    image: pizzaDPanela,
  },
  {
    name: "Lombo",
    observation: "Temos também c/ Abacaxi ou Catupiry",
    image: pizzaLombo,
  },
  {
    name: "Mafiosa",
    description: "Calabresa Picante e Beringela",
    image: pizzaMafiosa,
  },
  {
    name: "Milho",
    observation: "Temos também c/ Bacon",
    image: pizzaMilho,
  },
  {
    name: "Moda da Casa",
    description:
      "Calabresa, Chester, Tomate, Pimentão, Palmito, Champignon, Cebola e Azeitona",
    image: pizzaModaCasa,
  },
  {
    name: "Siciliana",
    description: "Calabresa, Cebola em rodelas e Azeitona",
    image: pizzaSiciliana,
  },
  {
    name: "Strogonoff",
    description: "Strogonoff com Batata Palha",
    observation: "Disponível também sem Batata Palha",
    image: pizzaStrogonoff,
  },
  {
    name: "Suprema",
    description: "Calabresa Forte, Champignon, Cebola em rodelas e Azeitonas",
    image: pizzaSuprema,
  },
  {
    name: "Toscana",
    description: "Calabresa Forte, Tomate em rodelas e Alho",
    image: pizzaToscana,
  },
  {
    name: "Quatro Queijos",
    description: "Gorgonzola, Mussarela, Parmesão, Provolone",
    image: pizza4Queijos,
  },
  {
    name: "Cinco Quejos",
    description: "Chedder, Grongonzola, Mussarela, Parmesão, Provolone",
    image: pizza5Queijos,
  },
  {
    name: "Seis Quejos",
    description:
      "Catupiry, Chedder, Gorgonzola, Mussarela, Parmesão e Provolone",
    image: pizza6Queijos,
  },
];

function formatPizzaName(pizza: Pizza) {
  return pizza.description ? `${pizza.name}:` : pizza.name;
}

const SavoryPizzaSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${pizzaRoute})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        padding: "20px",
      }}
    >
      {/* Information Block */}
      <Box
        sx={{
          backgroundColor: "rgba(245, 221, 171, 0.9)", // Beige/yellowish color with slight transparency
          borderRadius: "8px",
          paddingTop: "10px",
          paddingBottom: "10px",
          maxWidth: "450px",
          margin: "auto",
          marginBottom: "20px",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Tangerine",
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#4B2E2A",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          Tamanhos das nossas Pizzas
        </Typography>
        <Typography
          sx={{
            fontFamily: "Tangerine",
            fontSize: "1rem",
            color: "#4B2E2A",
            textAlign: "center",
          }}
        >
          <List sx={{ display: "inline-block", padding: 0 }}>
            <ListItem sx={{ justifyContent: "center", padding: 0 }}>
              <ListItemText
                primary="45cm (4 Sabores) = R$ 79,90"
                primaryTypographyProps={{
                  sx: { fontSize: "1.2rem", color: "#4B2E2A" },
                }}
              />
            </ListItem>
            <ListItem sx={{ justifyContent: "center", padding: 0 }}>
              <ListItemText
                primary="40cm (3 Sabores) = R$ 69,90"
                primaryTypographyProps={{
                  sx: { fontSize: "1.2rem", color: "#4B2E2A" },
                }}
              />
            </ListItem>
            <ListItem sx={{ justifyContent: "center", padding: 0 }}>
              <ListItemText
                primary="35cm (3 Sabores) = R$ 59,90"
                primaryTypographyProps={{
                  sx: { fontSize: "1.2rem", color: "#4B2E2A" },
                }}
              />
            </ListItem>
            <ListItem sx={{ justifyContent: "center", padding: 0 }}>
              <ListItemText
                primary="25cm (2 Sabores) = R$ 30,00"
                primaryTypographyProps={{
                  sx: { fontSize: "1.2rem", color: "#4B2E2A" },
                }}
              />
            </ListItem>
          </List>
        </Typography>
      </Box>
      <Box
        sx={{
          position: "relative",
          backgroundColor: "rgb(245, 241, 230, 0.9)",
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
          {savoryFlavors.map((savoryFlavor: Pizza, index) => (
            <ListItem
              key={index}
              sx={{
                paddingLeft: 0,
                display: "flex",
                alignItems: "center",
                marginBottom: 1,
              }}
            >
              {/* Image thumbnail */}
              <Box
                component="img"
                src={savoryFlavor.image}
                alt={savoryFlavor.name}
                sx={{
                  height: 80,
                  borderRadius: "10%",
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
                    {formatPizzaName(savoryFlavor)}
                  </Typography>
                  <Box sx={{ maxHeight: "3rem" }}>
                    <Typography
                      component="span"
                      sx={{
                        color: "black",
                        fontFamily: "Tangerine",
                        marginLeft: 1,
                        fontSize: "1.00rem",
                      }}
                    >
                      {savoryFlavor.description}
                    </Typography>
                  </Box>
                </Box>

                {/* Observation, if any */}
                {savoryFlavor.observation && (
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

export default SavoryPizzaSection;
