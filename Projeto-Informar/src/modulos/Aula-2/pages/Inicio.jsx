import React from 'react';
import QuestionCard from '../../../components/QuestionCard';
import NextPage from "../../../components/Next_page";

function InicioAula2() {
  return (
    <div>
      <h1>Aula 2 - Início</h1>
      <h2>Condicionais</h2>
      <p>
      Na aula de hoje vimos como desenvolver programas que, dada uma condição, executam, ou não, um determinado bloco de código. Suponha que queremos desenvolver uma função que recebe dois números, x e y como argumento e devolve 1 se x for maior do que y e 0, caso contrário. A não ser que exista uma fórmula fechada (existe, para alguns casos), precisamos de alguma forma de executar um trecho de código <strong>somente se</strong> x for maior que y e outro trecho de código <strong>somente se</strong> essa condição não for verdadeira.
      </p>
      <h2>Importante:</h2>
      <p>
      <strong>if</strong> = <strong>se</strong>
      </p>
      <p>
      <strong>else</strong> = <strong>se não</strong>
      </p>
      <p>
      <strong>elif</strong> = <strong>else</strong> + <strong>if</strong>
      </p>
      <NextPage nomeDaPagina={'Condicionais'} link={'/aula-2/condicionais'}/>
    </div>
  );
}

export default InicioAula2;
