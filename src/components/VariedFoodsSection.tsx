import { Box, List, ListItem, Typography } from "@mui/material";
import React from "react";

import oscarLogo from "../assets/background/chef-oscar-logo.jpg";

import batataFritaImg from "../assets/menu-online/varied-foods/batata-frita.jpeg";
import bauruImg from "../assets/menu-online/varied-foods/bauru.png";
import cachorroQuenteImg from "../assets/menu-online/varied-foods/cachorro-quente.jpeg";
import cachorroQuente3Queij0sImg from "../assets/menu-online/varied-foods/cachorro-quente-3queijos.jpeg";
import cachorroQuenteLinguicaImg from "../assets/menu-online/varied-foods/cachorro-quente-linguica.jpeg";
import cachorroQuenteBaconImg from "../assets/menu-online/varied-foods/cachorro-quente-bacon.jpeg";
import iscaPeixeImg from "../assets/menu-online/varied-foods/isca-peixe.jpg";
import parmegianaImg from "../assets/menu-online/varied-foods/parmegiana.jpg";
import peixeGrelhadoImg from "../assets/menu-online/varied-foods/peixe-grelhado.jpg";
import picadaoImg from "../assets/menu-online/varied-foods/picadao.jpeg";

interface Food {
  name: string;
  description?: string;
  image: string;
  observation?: string;
  price: string;
}

const VariedFoods: Food[] = [
  {
    name: "Batata Frita",
    image: batataFritaImg,
    observation: "Adicionais: Bacon e queijo.",
    price: "R$ 25,00",
  },
  {
    name: "Baurú",
    description:
      "Bife de coxão mole, presunto, ovo, maionese a gosto, queijo, alface, tomate e cebola",
    image: bauruImg,
    observation: "Pimenta a gosto.",
    price: "R$ 30,00",
  },
  {
    name: "Cachorro-Quente",
    description:
      "Salsicha, queijo, tomate, milho, ervilha, batata-palha, pimenta, maionese, ketchup e mostarda a gosto",
    image: cachorroQuenteImg,
    price: "R$ 18,00",
  },
  {
    name: "Cachorro-Quente 3 Queijos",
    description:
      "Queijo cheddar, queijo mussarela, queijo gorgonzola, salsicha, queijo, tomate, milho, ervilha, batata-palha, pimenta, orégano, maionese, ketchup e mostarda a gosto",
    image: cachorroQuente3Queij0sImg,
    price: "R$ 25,00",
  },
  {
    name: "Cachorro-Quente Linguiça Gourmet",
    description:
      "Linguiça artesanal, queijo provolone, orégano, salsicha, queijo, tomate, milho, ervilha, batata-palha, pimenta, maionese, ketchup e mostarda a gosto",
    image: cachorroQuenteLinguicaImg,
    price: "R$ 26,00",
  },
  {
    name: "Cachorro-Quente Bacon Crocante",
    description:
      "Bacon crocante, queijo cheddar, s  alsicha, queijo, tomate, milho, ervilha, batata-palha, pimenta, maionese, ketchup e mostarda a gosto",
    image: cachorroQuenteBaconImg,
    price: "R$ 26,00",
  },
  {
    name: "Iscas de Peixe",
    description: "Ao Molho Tártaro",
    image: iscaPeixeImg,
    price: "R$ 30,00",
  },
  {
    name: "Parmegiana",
    description: "Filé empanado, molho vermelho, presunto, queijo muçarela e parmesão",
    image: parmegianaImg,
    price: "R$ 30,00",
  },
  {
    name: "Peixe Grelhado",
    description: "Alface, tomate, batata e limão",
    image: peixeGrelhadoImg,
    price: "R$ 30,00",
  },
  {
    name: "Picadão",
    description:
      "Azeitona, calabresa, codorna, coração, pepino, frango, presunto, queijo, carne e alface",
    image: picadaoImg,
    price: "R$ 90,00",
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
                  width: "100px",
                  height: "80px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginRight: "20px",
                  flexShrink: 0,
                }}
              />
              <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{
                    color: "#4B2E2A",
                    fontWeight: "bold",
                    fontFamily: "Tangerine",
                    fontSize: "1.75rem",
                  }}
                >
                  {food.name}
                </Typography>
                {food.description && (
                  <Typography
                    sx={{
                      color: "black",
                      fontFamily: "Tangerine",
                      fontSize: "1.00rem",
                      marginTop: "5px",
                    }}
                  >
                    {food.description}
                  </Typography>
                )}
                {food.observation && (
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#8B5E3C",
                      fontFamily: "Tangerine",
                      fontSize: "0.90rem",
                      fontWeight: "bold",
                      marginTop: "5px",
                    }}
                  >
                    {food.observation}
                  </Typography>
                )}
              </Box>
              <Typography
                sx={{
                  color: "#4B2E2A",
                  fontWeight: "bold",
                  fontFamily: "Tangerine",
                  fontSize: "1.5rem",
                  marginRight: "20px",
                }}
              >
                {food.price}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default VariedFoodsSection;
