import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";

import oscarLogo from "../assets/background/chef-oscar-logo.jpg";
import pizzaBanana from "../assets/menu-online/pizza/sweet/pizza-bananacanela.png";
import pizzaBombom from "../assets/menu-online/pizza/sweet/pizza-bombom.png";
import pizzaBrigadeiro from "../assets/menu-online/pizza/sweet/pizza-brigadeiro.jpeg";
import pizzaChocolatePreto from "../assets/menu-online/pizza/sweet/pizza-chocolatepreto.jpeg";
import pizzaChocolateBranco from "../assets/menu-online/pizza/sweet/pizza-chocolatebranco.jpeg";
import pizzaCoco from "../assets/menu-online/pizza/sweet/pizza-coco.png";
import pizzaChocoConfetes from "../assets/menu-online/pizza/sweet/pizza-pretoconfetes.jpeg";
import pizzaBrancoConfetes from "../assets/menu-online/pizza/sweet/pizza-brancoconfetes.png";
import pizzaPrestigio from "../assets/menu-online/pizza/sweet/pizza-prestigio.jpeg";
import pizzaVeuNoiva from "../assets/menu-online/pizza/sweet/pizza-veunoiva.jpeg";

interface Pizza {
  name: string;
  description?: string;
  image?: string;
  observation?: string;
}

const sweetFlavors: Pizza[] = [
  {
    name: "Banana com Canela",
    description: "Banana, Canela, Açucar e Muçarela",
    image: pizzaBanana,
  },
  {
    name: "Bombom",
    description: "Bombom, Leite Condensado e Muçarela",
    image: pizzaBombom,
  },
  {
    name: "Brigadeiro",
    description: "Chocolate Granulado, Chocolate ao Leite e Muçarela",
    image: pizzaBrigadeiro,
  },
  {
    name: "Chocolate Branco",
    description: "Chocolate Branco e Muçarela",
    image: pizzaChocolateBranco,
  },
  {
    name: "Chocolate Preto",
    description: "Chocolate ao Leite e Muçarela",
    image: pizzaChocolatePreto,
  },
  {
    name: "Pizza de Côco",
    description: "Côco, Leite Condensado e Muçarela",
    image: pizzaCoco,
  },
  {
    name: "Confete Chocolate ao Leite",
    description: "Chocolate ao Leite, Confeitos e Muçarela",
    image: pizzaChocoConfetes,
  },
  {
    name: "Confete Chocolate Branco",
    description: "Chocolate Branco, Confeitos e Muçarela",
    image: pizzaBrancoConfetes,
  },
  {
    name: "Pizza de Prestígio",
    description: "Chocolate ao Leite, Côco, Leite Condensado e Muçarela",
    image: pizzaPrestigio,
  },
  {
    name: "Pizza Véu de Noiva",
    description: "Chocolate Branco, Côco, Leite Condensado e Muçarela",
    image: pizzaVeuNoiva,
  },
];

function formatPizzaName(pizza: Pizza) {
  return pizza.description ? `${pizza.name}:` : pizza.name;
}

const SweetPizzaSection = () => {
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
      {/* Information Block */}
      <Box
        sx={{
          backgroundColor: "rgba(245, 221, 171, 0.9)",
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
          Pizzas Doces
        </Typography>
        <List sx={{ paddingLeft: 2 }}>
          {sweetFlavors.map((sweetFlavor: Pizza, index) => (
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
                src={sweetFlavor.image}
                alt={sweetFlavor.name}
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
                    {formatPizzaName(sweetFlavor)}
                  </Typography>
                  <Box sx={{ maxHeight: "3rem" }}>
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
                      {sweetFlavor.description}
                    </Typography>
                  </Box>
                </Box>

                {/* Observation, if any */}
                {sweetFlavor.observation && (
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
                    * {sweetFlavor.observation}
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

export default SweetPizzaSection;
