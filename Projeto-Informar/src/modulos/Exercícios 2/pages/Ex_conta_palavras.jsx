import React from "react";
import CodeEditor from "./CodeEditor";

function Ex_conta_palavras() {
  return (
    <div>
      <h1>Exercício 2 - Função Conta Palavras</h1>
      <p>
        Escreva uma função <code>"conta_palavras()"</code> que receba uma string
        e retornaa a quantidade de palavras que aquela string tem.
      </p>
      <CodeEditor exerciseId={9} />
    </div>
  );
}

export default Ex_conta_palavras;
