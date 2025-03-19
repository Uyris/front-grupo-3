import React from "react";
import CodeEditor from "./CodeEditor";
import { MathJax, MathJaxContext } from "better-react-mathjax";

function Ex_area_do_circulo() {
  return (
    <MathJaxContext>
      <div>
        <h1>Exercício 1 - Função Área do Círculo</h1>
        <p>
          Implemente a função <code>calcula_area_circulo</code> que recebe o
          raio de um círculo e retorna a sua área.
        </p>
        <p>A fórmula para calcular a área de um círculo é:</p>
        <MathJax>
          {"\\[ \\text{Área} = \\pi \\times \\text{raio}^2 \\]"}
        </MathJax>
        <CodeEditor exerciseId={4} />
      </div>
    </MathJaxContext>
  );
}

export default Ex_area_do_circulo;
