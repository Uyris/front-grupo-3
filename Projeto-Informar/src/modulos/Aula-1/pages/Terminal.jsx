import React from 'react';
import QuestionCard from '../../../components/QuestionCard';
import NextPage from "../../../components/Next_page";

function Terminal() {
  return (
    <div>
      <h1>Aula 1 - Terminal</h1>
      <p>
      Vamos relembrar do que aprendemos na aula a respeito do terminal em Python.
      </p>
      <QuestionCard
        questionTitle="Exercício 1"
        questionDescription="Considere o seguinte código:"
        codeSnippet={`nome = input('Qual é o seu nome? ')
print(nome)`}
        questionText="O que esse código faz?"
        options={[
          "Imprime 'nome'.",
          "Não faz nada.",
          "Pede um nome para o usuário e depois o imprime.",
          "O código da algum erro."
        ]}
        correctIndex={2}
        explanation="input('texto') pede uma informação ao usuário pelo terminal." 
        localStorageKey="exercicio1_terminal"
      />
      <QuestionCard
        questionTitle="Exercício 2"
        questionDescription="Considere o seguinte código:"
        codeSnippet={`a = int(input('Digite um número: '))
b = int(input('Digite outro número: '))
print(2*a-b)`}
        questionText="Se o usuário digitou 5 no terminal, que outro número ele terá que digitar para o código imprimir 8?"
        options={[
          "3",
          "2",
          "5",
          "1"
        ]}
        correctIndex={1}
        explanation="O variável b vai se tornar o que o usuário digitar."
        localStorageKey="exercicio2_terminal"
      />
      <NextPage nomeDaPagina={'Aula 2'} link={'/aula-2/inicio'}/>
    </div>
  );
}

export default Terminal;
