import React from "react";
import QuestionCard from "../../../components/QuestionCard";
import NextPage from "../../../components/Next_page";

function While() {
  return (
    <div>
      <h1>Aula 4 - While</h1>
      <p>
        Vamos relembrar do que aprendemos na aula a respeito de while em Python.
      </p>
      <QuestionCard
        questionTitle="Exercício 1"
        questionDescription=""
        codeSnippet={``}
        questionText="Qual é a tradução de while?"
        options={["enquanto", "se", "se não", "para"]}
        correctIndex={0}
        explanation=""
        localStorageKey="exercicio1_while"
      />
      <QuestionCard
        questionTitle="Exercício 2"
        questionDescription="Considere o seguinte código:"
        codeSnippet={`contador = 0
while contador < 3
  print('Informar')
  contador += 1`}
        questionText="Quantas vezes o código vai imprimir 'Informar'?"
        options={["2", "4", "3", "1"]}
        correctIndex={2}
        explanation="O while vai se repetir até que o contador seja igual ou maior que 3."
        localStorageKey="exercicio2_while"
      />
      <QuestionCard
        questionTitle="Exercício 3"
        questionDescription="Considere o seguinte código:"
        codeSnippet={`contador = 0
while contador < 4
  print('Informar')
  contador -= 1`}
        questionText="Quantas vezes o código vai imprimir 'Informar'?"
        options={["1", "0", "4", "O código gera um loop infinito."]}
        correctIndex={3}
        explanation="O contador nunca vai ser maior que 4, criando um loop infinito."
        localStorageKey="exercicio3_while"
      />
      <QuestionCard
        questionTitle="Exercício 4"
        questionDescription="Considere o seguinte código:"
        codeSnippet={`contador = 1
while contador < 5:
    contador *= 2
    print(contador)`}
        questionText="Qual será a mensagem impressa no terminal?"
        options={[
          `2
4`,
          `1
2
4`,
          `4`,
          `O código gera um loop infinito.`,
        ]}
        correctIndex={0}
        explanation="O contador é multiplicado por 2 toda vez que passa pelo while."
        localStorageKey="exercicio4_while"
      />
      <QuestionCard
        questionTitle="Exercício 5"
        questionDescription="Considere o seguinte código:"
        codeSnippet={`contador = 0
while contador < 5:
    print(contador)
contador += 1`}
        questionText="Qual será a mensagem impressa no terminal?"
        options={[
          `O código vai imprimir de 0 até 4.`,
          `O código vai imprimir de 1 até 5.`,
          `O código não vai imprimir nada.`,
          "O código gera um loop infinito.",
        ]}
        correctIndex={3}
        explanation="O trecho do código que deveria aumentar o contador está indentado incorretamente, fazendo com que o contador não atualize e gere um loop infinito."
        localStorageKey="exercicio5_while"
      />
      <NextPage nomeDaPagina={'Aula 5'} link={'/aula-5/inicio'}/>
    </div>
  );
}

export default While;
