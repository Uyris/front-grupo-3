import React from "react";
import CodeEditor from "./CodeEditor";

function Ex_eh_primo() {
  return (
    <div>
      <h1>Exercício 2 - Função Eh_Primo</h1>
      <p>
      Implemente uma <code>"função eh_primo()"</code> que consegue validar se um número é primo ou não. Caso o número seja primo, ela deve retornar True, caso contrário, deve retornar False.
      </p>
      <p> Dica: Um número primo só pode ser divido completamente por 1 e ele mesmo. </p>
      <CodeEditor exerciseId={10} />
    </div>
  );
}

export default Ex_eh_primo;
