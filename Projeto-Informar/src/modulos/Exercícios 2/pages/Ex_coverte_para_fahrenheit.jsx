import React from "react";
import CodeEditor from "./CodeEditor";

function Ex_celsius_para_fahrenheit() {
  return (
    <div>
      <h1>Exercício 2 - Função Celsius para Fahrenheit</h1>
      <p>
      Faça uma função <code>"celsius_para_fahrenheit()"</code> que recebe como argumento um número que representa uma temperatura em Celsius e deve retornar como resultado da função o número convertido para Fahrenheit.
      </p>
      <p> Lembrete: <code> F = (C × 9/5) + 32 </code> #Fórmula para conversão. </p>
      <CodeEditor exerciseId={11} />
    </div>
  );
}

export default Ex_celsius_para_fahrenheit;
