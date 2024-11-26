import { Avatar, Box, List, ListItem, Typography } from "@mui/material";
import React from "react";
import oscarLogo from "../assets/background/chef-oscar-logo.jpg";

import XBacon from "../assets/menu-online/xis/xis-bacon.jpeg";
import XCalabresa from "../assets/menu-online/xis/xis-calabresa.jpeg";
import XCoracao from "../assets/menu-online/xis/xis-coracao.jpg";
import XFrango from "../assets/menu-online/xis/xis-frango.jpeg";
import XSalada from "../assets/menu-online/xis/xis-salada.jpeg";
import XStrogonoff from "../assets/menu-online/xis/xis-strogonoff.jpeg";

interface Food {
  name: string;
  description?: string;
  image: string;
  observation?: string;
  price: string;
}

interface AdditionalItems {
  name: string;
  value: string;
}

export const XisFlavors: Food[] = [
  {
    name: "Xis Bacon",
    description:
      "Hambúrguer bovino, bacon frito, queijo muçarela, alface, tomate, maionese, ketchup, mostarda, milho e ervilha.",
    image: XBacon,
    price: "R$ 31,00",
  },
  {
    name: "Xis Calabresa",
    description:
      " Calabresa frita, queijo muçarela, alface, tomate, maionese, ketchup, mostarda, milho e ervilha.",
    image: XCalabresa,
    price: "R$ 28,00",
  },
  {
    name: "Xis Coração",
    description:
      "Coração de frango, queijo muçarela, alface, tomate, maionese, ketchup, mostarda, milho e ervilha.",
    image: XCoracao,
    price: "R$ 30,00",
  },
  {
    name: "Xis Frango",
    description:
      "Frango em cubos, queijo muçarela, alface, tomate, maionese, ketchup, mostarda, milho e ervilha.",
    image: XFrango,
    price: "R$ 27,00",
  },
  {
    name: "Xis Salada",
    description:
      "Hambúrguer bovino, queijo muçarela, alface, tomate, cebola, maionese, ketchup, mostarda, milho e ervilha.",
    image: XSalada,
    price: "R$ 27,00",
  },
  {
    name: "Xis Strogonoff",
    description:
      "Strogonoff de carne, batata palha, queijo muçarela, alface, tomate, cebola, maionese, ketchup, mostarda, milho e ervilha.",
    image: XStrogonoff,
    price: "R$ 32,00",
  },
];

export const AdditionalItems_: AdditionalItems[] = [
  {
    name: "Hambúrguer",
    value: "R$ 5,00",
  },
  {
    name: "Queijo",
    value: "R$ 3,00",
  },
  {
    name: "Presunto",
    value: "R$ 2,00",
  },
];

export const XisSection = () => {
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
          padding: "20px",
          width: { xs: "90%", sm: "80%", md: "70%" },
          maxWidth: "800px",
          margin: "auto",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          position: "relative",
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
            fontSize: { xs: "1.5rem", md: "2rem" },
          }}
        >
          Cardápio de Xis
        </Typography>

        <List>
          {XisFlavors.map((flavor, index) => (
            <ListItem
              key={index}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                justifyContent: { xs: "center", sm: "space-between" },
                padding: "20px 0",
              }}
            >
              {/* Image Section */}
              <Avatar
                src={flavor.image || "https://via.placeholder.com/150"}
                alt={flavor.name}
                variant="rounded"
                sx={{
                  width: { xs: 80, sm: 100 },
                  height: { xs: 80, sm: 100 },
                  marginBottom: { xs: "10px", sm: "0" },
                  borderRadius: "8px",
                }}
              />
              {/* Text Section */}
              <Box
                sx={{
                  textAlign: { xs: "center", sm: "left" },
                  marginLeft: { xs: "0", sm: "15px" },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: "#4B2E2A",
                    fontWeight: "bold",
                    fontFamily: "Tangerine",
                    fontSize: { xs: "1.2rem", sm: "1.5rem" },
                  }}
                >
                  {flavor.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "black",
                    fontFamily: "Tangerine",
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                    marginTop: "5px",
                  }}
                >
                  {flavor.description}
                </Typography>
              </Box>
              {/* Price Section */}
              <Typography
                sx={{
                  color: "#4B2E2A",
                  fontWeight: "bold",
                  fontFamily: "Tangerine",
                  fontSize: { xs: "1.2rem", sm: "1.5rem" },
                  marginTop: { xs: "10px", sm: "0" },
                  textAlign: { xs: "center", sm: "right" },
                  whiteSpace: "nowrap",
                }}
              >
                {flavor.price}
              </Typography>
            </ListItem>
          ))}
        </List>
        {/* Additionals Section */}
        <Box
          sx={{
            marginTop: "20px",
            marginLeft: "auto",
            backgroundColor: "rgba(245, 221, 121, 0.9)",
            padding: "5px 15px",
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            width: "fit-content",
            textAlign: "left",
          }}
        >
          <List>
            <Typography
              variant="h6"
              sx={{
                color: "#4B2E2A",
                fontWeight: "bold",
                fontFamily: "Tangerine",
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                marginBottom: "10px",
              }}
            >
              Adicionais:
            </Typography>

            {AdditionalItems_.map((item, index) => (
              <ListItem
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: { xs: "5px 0", sm: "0" },
                  flexDirection: { xs: "column", sm: "row" },
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#4B2E2A",
                    fontFamily: "Tangerine",
                    fontSize: "1rem",
                    flex: 1,
                  }}
                >
                  - {item.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#4B2E2A",
                    fontFamily: "Tangerine",
                    fontSize: "0.9rem",
                    marginLeft: { sm: "10px" },
                  }}
                >
                  {item.value};
                </Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};
