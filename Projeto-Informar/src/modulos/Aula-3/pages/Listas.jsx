import React from "react";
import QuestionCard from "../../../components/QuestionCard";
import NextPage from "../../../components/Next_page";

function Listas() {
  return (
    <div>
      <h1>Aula 3 - Listas</h1>
      <p>
        Vamos relembrar do que aprendemos na aula a respeito de listas em
        Python.
      </p>
      <QuestionCard
        questionTitle="Exercício 1"
        questionDescription="Considere o seguinte código:"
        codeSnippet={`lista_exemplo = ['a','b','c','d']
print(1)`}
        questionText="Qual será a mensagem impressa no terminal?"
        options={["a", "b", "c", "d"]}
        correctIndex={1}
        explanation="A contagem em Python é iniciada em 0, portanto 1 equivale ao segundo elemento da lista."
        localStorageKey="exercicio1_listas"
      />
      <QuestionCard
        questionTitle="Exercício 2"
        questionDescription="Considere o seguinte código:"
        codeSnippet={`lista_exemplo = [0,1,2,3,4]
numero_elementos = len(lista_exemplo)
print(numero_elementos)`}
        questionText="Qual será a mensagem impressa no terminal?"
        options={["4", "3", "[1,2,3,4,5]", "5"]}
        correctIndex={3}
        explanation="A função len() retorna o número de elementos dentro de uma lista."
        localStorageKey="exercicio2_listas"
      />
      <QuestionCard
        questionTitle="Exercício 3"
        questionDescription="Considere o seguinte código:"
        codeSnippet={`nomes = ['Pedro','Maria','Arthur']
indice_nome = nomes.index('Maria')
print(indice_nome)`}
        questionText="Qual será a mensagem impressa no terminal?"
        options={["0", "1", "2", "3"]}
        correctIndex={1}
        explanation="A função index() retorna o índice de um elemento dentro de uma lista."
        localStorageKey="exercicio3_listas"
      />
      <QuestionCard
        questionTitle="Exercício 4"
        questionDescription="Considere o seguinte código:"
        codeSnippet={`nomes = ['Pedro','Maria','Arthur']
nomes.append('Sofia')
print(nomes)`}
        questionText="Qual será a mensagem impressa no terminal?"
        options={[
          "['Pedro','Maria','Arthur']",
          "['Sofia','Pedro','Maria','Arthur']",
          "['Pedro','Maria','Arthur', 'Sofia']",
          "nomes",
        ]}
        correctIndex={2}
        explanation="A função append() adiciona um elemento dentro de uma lista."
        localStorageKey="exercicio4_listas"
      />
      <QuestionCard
        questionTitle="Exercício 5"
        questionDescription="Considere o seguinte código:"
        codeSnippet={`nomes = ['Pedro','Maria','Arthur']
nomes.pop(1)
print(nomes)`}
        questionText="Qual será a mensagem impressa no terminal?"
        options={[
          "['Pedro','Maria','Arthur']",
          "['Maria','Arthur']",
          "['Pedro','Arthur']",
          "['Pedro','Maria']",
        ]}
        correctIndex={2}
        explanation="A função pop() remove o elemento da lista do índice indicado."
        localStorageKey="exercicio5_listas"
      />
      <QuestionCard
        questionTitle="Exercício 6"
        questionDescription="Considere o seguinte código:"
        codeSnippet={`lista_exemplo = [0,2,4,6]
a = 2 in lista_exemplo
b = '4' in lista_exemplo
print(a)
print(b)`}
        questionText="Qual será a mensagem impressa no terminal?"
        options={[
          `True
False`,
          `False
True`,
          `False
False`,
          `True
True`,
        ]}
        correctIndex={0}
        explanation="'in' traduz para 'em', ou seja, a é True(verdadeiro) enquanto b é False(falso) porque '4' é uma string e não um inteiro."
        localStorageKey="exercicio6_listas"
      />
      <NextPage nomeDaPagina={'Strings'} link={'/aula-3/strings'}/>
    </div>
  );
}

export default Listas;
