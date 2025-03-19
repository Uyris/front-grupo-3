import React from "react";
import CodeEditor from "./CodeEditor";

function Ex_maximo() {
  return (
    <div>
      <h1>Exercício 1 - Função Faz_Maximo</h1>
      <p>
        Faça uma função "faz_maximo()" (USE ESTRITAMENTE ESSE NOME PARA NOMEAR
        SUA FUNÇÃO) que recebe uma lista de numeros como argumento e retorna o
        maior numero inteiro postivo.
      </p>
      <CodeEditor exerciseId={2} />
    </div>
  );
}

export default Ex_maximo;
