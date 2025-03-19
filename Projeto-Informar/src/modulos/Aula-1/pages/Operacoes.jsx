import React from "react";
import QuestionCard from "../../../components/QuestionCard";
import NextPage from "../../../components/Next_page";

function Operacoes() {
  return (
    <div>
      <h1>Aula 1 - Operações</h1>
      <p>
        Vamos relembrar do que aprendemos na aula a respeito de operações em
        Python.
      </p>
      <QuestionCard
        questionTitle="Exercício 1"
        questionDescription="Considere o seguinte código:"
        codeSnippet={`x = 2 + 2 * 4
print(x)`}
        questionText="Qual será a mensagem impressa no terminal?"
        options={["8", "16", "10", "12"]}
        correctIndex={2}
        explanation="O programa segue a ordem de operações, fazendo primeiro a multiplicação e depois a adição."
        localStorageKey="exercicio1_operacoes"
      />
      <QuestionCard
        questionTitle="Exercício 2"
        questionDescription="Considere o seguinte código:"
        codeSnippet={`x = (2 + 2) * 4
print(x)`}
        questionText="Qual será a mensagem impressa no terminal?"
        options={["16", "10", "12", "8"]}
        correctIndex={0}
        explanation="O programa faz as operações entre parênteses e depois as que estão fora."
        localStorageKey="exercicio2_operacoes"
      />
      <QuestionCard
        questionTitle="Exercício 3"
        questionDescription="Considere o seguinte código:"
        codeSnippet={`x = 4 / 2 * 2
print(x)`}
        questionText="Qual será a mensagem impressa no terminal?"
        options={["1", "4", "2", "8"]}
        correctIndex={1}
        explanation="As operações tem que ser feitas em ordem."
        localStorageKey="exercicio3_operacoes"
      />
      <QuestionCard
        questionTitle="Exercício 4"
        questionDescription="Considere o seguinte código:"
        codeSnippet={`x = 2 * 5 ** 2
print(x)`}
        questionText="Qual será a mensagem impressa no terminal?"
        options={["100", "20", "50", "25"]}
        correctIndex={2}
        explanation="O programa segue a ordem de operações, fazendo a potenciação primeiro e depois a multiplicação."
        localStorageKey="exercicio4_operacoes"
      />
      <QuestionCard
        questionTitle="Exercício 5"
        questionDescription="Considere o seguinte código:"
        codeSnippet={`x = (8 / 2) ** 2
print(x)`}
        questionText="Qual será a mensagem impressa no terminal?"
        options={["8", "64", "4", "16"]}
        correctIndex={3}
        explanation="O programa faz as operações entre parênteses e depois as que estão fora."
        localStorageKey="exercicio5_operacoes"
      />
      <NextPage nomeDaPagina={'Variáveis'} link={'/aula-1/variaveis'}/>
    </div>
  );
}

export default Operacoes;
