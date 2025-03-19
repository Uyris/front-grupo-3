import React from "react";
import NextPage from "../../../components/Next_page";
import { Box } from "@mui/material";
import imagem1 from "../../../assets/imagem1_sobre.png";
import imagem2 from "../../../assets/imagem2_sobre.jpg";
function Sobre() {
  return (
    <div>
      <h1>O que é o GAS?</h1>
      <p>
        O Grupo de Ação Social é uma entidade estudantil do Insper com foco em
        desenvolver, apoiar e executar projetos de âmbito social de forma a
        gerar conscientização, incentivos, comportamentos e atitudes que
        promovam a transformação social na comunidade.
      </p>
      <Box
        component="img"
        src={imagem1}
        alt="Informar GAS"
        sx={{
          width: "60%",
          display: "block",
          margin: "70px auto", 
        }}
      />
      <h1>Sobre o Informar</h1>
      <p>
        O Informar é um dos dez projetos do GAS e tem como propósito
        democratizar o ensino de programação para jovens que nunca tiveram
        contato com essa área. por ministrar as aulas, acompanhar os alunos e
        garantir uma experiência de aprendizado transformadora.
      </p>
      <Box
        component="img"
        src={imagem2}
        alt="Informar GAS"
        sx={{
          width: "60%",
          display: "block",
          margin: "70px auto", 
        }}
      />
      <NextPage nomeDaPagina={"Aula 1"} link={"/aula-1/inicio"} />
    </div>
  );
}

export default Sobre;
