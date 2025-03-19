import React from "react";
import CodeEditor from "./CodeEditor";

function Ex_soma() {
  return (
    <div>
      <h1>Exercício 1 - Função Soma</h1>
      <p>
        Faça uma <code>função "soma()"</code> (USE ESTRITAMENTE ESSE NOME PARA
        NOMEAR SUA FUNÇÃO) que recebe dois numeros como argumento e retorna a
        soma deles. É possível que tentem passar strings como argumento, nesse
        caso o código deve retornar False.
      </p>
      <CodeEditor exerciseId={1} />
    </div>
  );
}

export default Ex_soma;
