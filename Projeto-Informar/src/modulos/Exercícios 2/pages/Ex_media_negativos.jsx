import React from "react";
import CodeEditor from "./CodeEditor";

function Ex_media_negativos() {
  return (
    <div>
      <h1>Exercício 2 - Função Média Negativos</h1>
      <p>
        Escreva uma função <code>"media_negativos()"</code> que receba uma lista
        de números inteiros e retorne a média dos números negativos na lista.
        Caso não haja números negativos, retorne `None`.
      </p>
      <CodeEditor exerciseId={7} />
    </div>
  );
}

export default Ex_media_negativos;
