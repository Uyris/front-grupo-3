import React from "react";
import CodeEditor from "./CodeEditor";

function Ex_soma_positivos() {
  return (
    <div>
      <h1>Exercício 1 - Função Faz_Maximo</h1>
      <p>
        Faça uma função "soma_positivos()" que receba uma lista de números
        inteiros e retorne a soma de todos os números positivos.
      </p>
      <CodeEditor exerciseId={6} />
    </div>
  );
}

export default Ex_soma_positivos;
