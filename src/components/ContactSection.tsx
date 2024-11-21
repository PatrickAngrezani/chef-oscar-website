import React from "react";
import { Box, Typography, Button } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";

const ContactSection = () => (
  <Box
    sx={{
      padding: "40px 20px",
      textAlign: "center",
      backgroundColor: "#FF4500",
      color: "#fff",
    }}
  >
    <Typography
      variant="h4"
      sx={{ fontWeight: "bold", marginBottom: 2, fontFamily: "Tangerine" }}
    >
      Contato e Delivery
    </Typography>
    <Typography variant="h6" sx={{ marginBottom: 2, fontFamily: "Tangerine" }}>
      Ligue agora:{" "}
      <Button color="inherit" href="tel:51-992333927" startIcon={<PhoneIcon />}>
        (51) 99233-3927
      </Button>
      <Button color="inherit" href="tel:51-30849494" startIcon={<PhoneIcon />}>
        (51) 3084-9494
      </Button>
    </Typography>
    <Typography variant="h5" sx={{ marginBottom: 2, fontFamily: "Tangerine" }}>
      Endereço: Rua Armando Barbedo 1043 - Porto Alegre, RS
    </Typography>
  </Box>
);

export default ContactSection;
