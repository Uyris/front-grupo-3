import React from "react";
import CodeEditor from "./CodeEditor";
import { MathJax, MathJaxContext } from "better-react-mathjax";

function Ex_area_do_triangulo() {
  return (
    <MathJaxContext>
      <div>
        <h1>Exercício 1 - Função Área do Triângulo</h1>
        <p>
          Implemente a função <code>calcula_area_triangulo</code> que recebe a
          base e a altura de um triângulo e retorna a sua área.
        </p>
        <p>A fórmula para calcular a área de um triângulo é:</p>
        <MathJax>
          {
            "\\[ \\text{Área} = \\frac{\\text{base} \\times \\text{altura}}{2} \\]"
          }
        </MathJax>
        <CodeEditor exerciseId={3} />
      </div>
    </MathJaxContext>
  );
}

export default Ex_area_do_triangulo;
