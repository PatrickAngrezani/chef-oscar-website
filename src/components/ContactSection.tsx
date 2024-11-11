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
      <Button color="inherit" href="tel:51-990117688" startIcon={<PhoneIcon />}>
        51-990117688
      </Button>
    </Typography>
    <Typography variant="h5" sx={{ marginBottom: 2, fontFamily: "Tangerine" }}>
      Endereço: Rua Armando Barbedo 1043 - Porto Alegre, RS
    </Typography>
    <Typography variant="h6" sx={{ marginBottom: 2, fontFamily: "Tangerine" }}>
      Frango assado disponível aos sábados, domingos e feriados
    </Typography>
  </Box>
);

export default ContactSection;
