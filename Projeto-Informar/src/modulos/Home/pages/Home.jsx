import React from "react";
import Logo from "../../../assets/Logo_gas.png";
import { Box } from "@mui/material";
import NextPage from "../../../components/Next_page";

function Home() {
  return (
    <div>
      <h1>Informar GAS - 2025/1</h1>
      <p>
        Aqui, você encontra uma seleção de exercícios para reforçar seu
        aprendizado em programação e tecnologia. Desenvolvido para alunos do
        projeto GAS Informar, o site oferece desafios práticos para aplicar os
        conceitos ensinados em aula.
      </p>
      <Box
        component="img"
        src={Logo}
        alt="Informar GAS"
        sx={{ height: "100px" }}
      />
      <p>
        Escolha um dos temas disponíveis e avance para a próxima página para
        começar!
      </p>
      <NextPage nomeDaPagina={"Sobre"} link={"/sobre"} />
    </div>
  );
}

export default Home;
