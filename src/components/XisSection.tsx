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

const xisFlavors = [
  {
    name: "Xis Bacon",
    description: "Bacon, cheese, lettuce, tomato",
    image: "/path/to/image1.jpg",
  },
  {
    name: "Xis Calabresa",
    description: "Calabresa sausage, cheese, lettuce, tomato",
    image: "/path/to/image2.jpg",
  },
  {
    name: "Xis Frango",
    description: "Grilled chicken, cheese, lettuce, tomato",
    image: "/path/to/image3.jpg",
  },
  {
    name: "Xis Coração",
    description: "Grilled heart, cheese, lettuce, tomato",
    image: "/path/to/image4.jpg",
  },
  {
    name: "Xis Bacon Egg",
    description: "Bacon, egg, cheese, lettuce, tomato",
    image: "/path/to/image5.jpg",
  },
  {
    name: "Xis Filé",
    description: "Steak, cheese, lettuce, tomato",
    image: "/path/to/image6.jpg",
  },
  {
    name: "Xis Vegetariano",
    description: "Grilled vegetables, cheese, lettuce, tomato",
    image: "/path/to/image7.jpg",
  },
  {
    name: "Xis Alcatra",
    description: "Alcatra beef, cheese, lettuce, tomato",
    image: "/path/to/image8.jpg",
  },
  {
    name: "Xis Picanha",
    description: "Picanha beef, cheese, lettuce, tomato",
    image: "/path/to/image9.jpg",
  },
  {
    name: "Xis Costela",
    description: "Rib meat, cheese, lettuce, tomato",
    image: "/path/to/image10.jpg",
  },
  {
    name: "Xis Pepperoni",
    description: "Pepperoni, cheese, lettuce, tomato",
    image: "/path/to/image11.jpg",
  },
  {
    name: "Xis Salame",
    description: "Salami, cheese, lettuce, tomato",
    image: "/path/to/image12.jpg",
  },
  {
    name: "Xis Parma",
    description: "Parma ham, cheese, lettuce, tomato",
    image: "/path/to/image13.jpg",
  },
  {
    name: "Xis Strogonoff",
    description: "Stroganoff meat, cheese, lettuce, tomato",
    image: "/path/to/image14.jpg",
  },
  {
    name: "Xis Tradicional",
    description: "Beef patty, cheese, lettuce, tomato",
    image: "/path/to/image15.jpg",
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
