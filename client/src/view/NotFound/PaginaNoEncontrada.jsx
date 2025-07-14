import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import "./notFound.css";

const PaginaNoEncontrada = () => {
  return (
    <Box
      className="page-container"
      sx={{
        minHeight: "100vh",
        background: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: 3,
      }}
    >
      <Typography
        className="roboto-condensed"
        variant="h2"
        sx={{ mb: 2, fontWeight: "bold", color: "white", textAlign: "center" }}
      >
        Página <span style={{ color: "var(--verde-inacex)" }}>No Encontrada</span>
      </Typography>

      <Typography
        variant="h6"
        className="roboto-condensed"
        sx={{ mb: 3, color: "white", textAlign: "center" }}
      >
        Lo sentimos, la página que buscas no existe o fue movida.
      </Typography>

      {/* Ticker de imágenes */}
      <Box
        sx={{
          overflow: "hidden",
          width: "100%",
          maxWidth: "600px",
          border: "2px solid #ddd",
          borderRadius: "8px",
          mb: 4,
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <Box className="ticker-container">
          <img src="./imgCursos/bull/bull-bg.png" alt="Bulldozer" />
          <img src="./imgCursos/moto/moto-bg.png" alt="Motoniveladora" />
          <img src="./imgCursos/frontal/cargador-bg.png" alt="Cargador Frontal" />
          <img src="./imgCursos/horquilla/horquilla-bg.png" alt="Grúa Horquilla" />
          <img src="./imgCursos/caex/caex-bg.png" alt="Camión de extracción" />
          <img src="./imgCursos/retro/retro-bg.png" alt="Retroexcavadora" />
        </Box>
      </Box>

      <Button
        variant="contained"
        startIcon={<HomeIcon />}
        component={Link}
        to="/"
        className="roboto-condensed"
        sx={{
          backgroundColor: "var(--verde-inacex)",
          fontSize: "20px",
          "&:hover": {
            backgroundColor: "#218c74",
          },
        }}
      >
        Volver al inicio
      </Button>
    </Box>
  );
};

export default PaginaNoEncontrada;
