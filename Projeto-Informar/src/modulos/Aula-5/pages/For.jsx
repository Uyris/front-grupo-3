import React from "react";
import QuestionCard from "../../../components/QuestionCard";
import NextPage from "../../../components/Next_page";

function For() {
  return (
    <div>
      <h1>Aula 5 - for</h1>
      <p>
        Vamos relembrar do que aprendemos na aula a respeito de for em Python.
      </p>
      <QuestionCard
        questionTitle="Exercício 1"
        questionDescription=""
        codeSnippet={``}
        questionText="Qual é a tradução para for?"
        options={["enquanto", "para", "se", "se não"]}
        correctIndex={1}
        explanation=""
        localStorageKey="exercicio1_for"
      />
      <QuestionCard
        questionTitle="Exercício 2"
        questionDescription=""
        codeSnippet={``}
        questionText="Qual é a tradução para range?"
        options={["se não", "enquanto", "se", "alcance"]}
        correctIndex={3}
        explanation=""
        localStorageKey="exercicio2_for"
      />
      <QuestionCard
        questionTitle="Exercício 3"
        questionDescription="Considere o seguinte código:"
        codeSnippet={`for i in range(3):
  print(i)`}
        questionText="Qual será a mensagem impressa no terminal?"
        options={[
          `0
1
2`,
          `[0, 1, 2]`,
          `0
1
2
3`,
          "[0, 1, 2, 3]",
        ]}
        correctIndex={0}
        explanation="O for imprime i no alcance de 0 até 3 (3 não é incluso)."
        localStorageKey="exercicio3_for"
      />
      <QuestionCard
        questionTitle="Exercício 4"
        questionDescription="Considere o seguinte código:"
        codeSnippet={`lista = ['Pedro', 'Maria', 'Joao']
for item in lista:
    print(item)`}
        questionText="Qual será a mensagem impressa no terminal?"
        options={[
          `Pedro
Maria
Joao`,
          `['Pedro','Maria','Joao']`,
          `'Pedro'
'Maria'
'Joao'`,
          `O programa não imprime nada.`,
        ]}
        correctIndex={0}
        explanation="O for percorre todos os elementos dentro da lista, imprimindo um de cada vez."
        localStorageKey="exercicio4_for"
      />
      <QuestionCard
        questionTitle="Exercício 5"
        questionDescription="Considere o seguinte código:"
        codeSnippet={`for i in range(3,7)
  print(i)`}
        questionText="Qual será a mensagem impressa no terminal?"
        options={[
          `3
4
5
6
7`,
          `3
4
5
6`,
          `4
5
6`,
          `[3,4,5,6]`,
        ]}
        correctIndex={1}
        explanation="O for imprime i no alcance de 3 até 7 (7 não é incluso)."
        localStorageKey="exercicio5_for"
      />
      <QuestionCard
        questionTitle="Exercício 6"
        questionDescription="Considere o seguinte código:"
        codeSnippet={`soma = 0
for i in range(1, 4):
    soma += i
print(soma)`}
        questionText="Qual será a mensagem impressa no terminal?"
        options={[
          `1
2
3`,
          "3",
          "4",
          "6",
        ]}
        correctIndex={3}
        explanation="O código soma 1, 2 e 3 à variável soma."
        localStorageKey="exercicio6_for"
      />
      <QuestionCard
        questionTitle="Exercício 7"
        questionDescription="Considere o seguinte código:"
        codeSnippet={`for i in range(5, 1, -1):
    print(i)`}
        questionText="O que ele faz?"
        options={[
          "Imprime os números de 5 a 1.",
          "Imprime os números de 5 a 2.",
          "Imprime os números de 1 a 5.",
          "Não imprime nada.",
        ]}
        correctIndex={1}
        explanation="O terceiro valor (-1) é o step (traduz para passo), que determina o intervalo entre os números gerados, fazendo a contagem decrescente."
        localStorageKey="exercicio7_for"
      />
      <NextPage nomeDaPagina={'Aula 6'} link={'/aula-6/inicio'}/>
    </div>
  );
}

export default For;
