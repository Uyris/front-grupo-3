import React from "react";
import CodeEditor from "./CodeEditor";

function Ex_inverte_string() {
  return (
    <div>
      <h1>Exercício 1 - Função Inverte String</h1>
      <p>
        Implemente a função <code>inverte_string()</code> que recebe uma string
        e retorna essa string invertida, ou seja, de trás para frente.
      </p>
      <CodeEditor exerciseId={5} />
    </div>
  );
}

export default Ex_inverte_string;
