import React from "react";
import NextPage from "../../../components/Next_page";

function InicioAula3() {
  return (
    <div>
      <h1>Aula 3 - Início</h1>
      <h2>Listas</h2>
      <p>
      Como já foi definido na aula de variáveis, as listas em Python são um tipo de variável que representa uma lista de elementos variados, ou seja, uma lista que pode conter todos os elementos descritos acima..
      </p>
      <p>
        Assim como as strings, cada elemento de uma lista possui um índice e é por meio dele que podemos acessar aquele elemento, nos permitindo até fazer alterações sobre o mesmo.
      </p>
      <h2>Strings</h2>
      <p>
      String é um tipo de variável em python que representa um encadeamento de caracteres, ou seja, representa valores em formato de <strong>texto, palavras, frase.</strong> Uma string pode representar um número, mas ao ele estar nesse formato não será possível efetuar nenhuma conta com ele. <strong>Cada elemento de uma string possui um índice (index)</strong> que se refere a ela dentro daquela variável.
Esse índice começa em zero  e vai até o elemento final daquela string.
      </p>
      <NextPage nomeDaPagina={'Listas'} link={'/aula-3/listas'}/>
    </div>
  );
}

export default InicioAula3;
