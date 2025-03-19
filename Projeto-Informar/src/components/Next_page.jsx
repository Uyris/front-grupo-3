import React from "react";
import { NavLink } from "react-router-dom";
import { Box } from "@mui/material";
import "./styles/Next_page.css";

function NextPage({ nomeDaPagina, link }) {
  return (
    <Box component={NavLink} to={link} className="next-page-container">
      <h2>Próxima Página</h2>
      <p>{nomeDaPagina}</p>
    </Box>
  );
}

export default NextPage;
