import React from 'react';
import NextPage from "../../../components/Next_page";

function InicioAula6() {
  return (
    <div>
      <h1>Aula 6 - Início</h1>
      <h2>Funções</h2>
      <p>
      Uma função em Python é um bloco de <strong>código definido (ou seja, que tem um nome) que realiza alguma tarefa e pode ser executado várias vezes ao longo de todo o código</strong> se ele for chamado.
As funções servem para facilitar a programação, ajudando a evitar a repetição de blocos de código, a existência de códigos grandes e confusos.
As funções precisam ser definidas e atuam sobre qualquer tipo de variável, desde que os seus comandos respeitem os limites dessa variável. <strong>Todas as funções devem retornar algo</strong>, que por sua vez também pode ser qualquer tipo de variável.
Ou seja, elas <strong>funcionam como um cozinheiro executando uma receita de bolo</strong>. Você fornece para ele os ingredientes e no final ele te retorna o bolo pronto.
      </p>
      <NextPage nomeDaPagina={'Funções'} link={'/aula-6/funcoes'}/>
    </div>
  );
}

export default InicioAula6;
