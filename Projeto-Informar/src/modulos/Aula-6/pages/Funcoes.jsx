import React from "react";
import QuestionCard from "../../../components/QuestionCard";

function Funcoes() {
  return (
    <div>
      <h1>Aula 6 - Funções</h1>
      <p>
        Vamos relembrar do que aprendemos na aula a respeito de funções em
        Python.
      </p>

      <QuestionCard
        questionTitle="Exercício 1"
        questionDescription=""
        questionText="Qual é o comando necessário para utilizar um pacote do Python?"
        options={["import", "print", "inport", "math"]}
        correctIndex={0}
        explanation="Para utilizamos um pacote, usamos o comando import seguido do nome do pacote."
        localStorageKey="exercicio1_funcoes"
      />

      {/* Você pode reutilizar o componente para outro exercício: */}
      <QuestionCard
        questionTitle="Exercício 2"
        questionText="Para que utilizamos as funções em Python?"
        options={[
          "Evitar repetições de código",
          "Melhorar a eficiência do código",
          "Tornar os programas mais legíveis e fáceis de entender",
          "Todas as anteriores",
        ]}
        correctIndex={3}
        explanation="Todas as alterntivas estão corretas."
        localStorageKey="exercicio2_funcoes"
      />
      <QuestionCard
        questionTitle="Exercício 3"
        questionText="Como declaramos uma função?"
        options={[
          "def nome_da_função(parâmetros):",
          "def (nome_da_função(parâmetros)):",
          "def nome_da_função[parâmetros]:",
          "def nome_da_função(parâmetros)",
        ]}
        correctIndex={0}
        explanation="Uma função é declarada no formato 'def nome_da_função(parâmetros):'. Não se esqueça dos ':' ao final! "
        localStorageKey="exercicio3_funcoes"
      />
      <QuestionCard
        questionTitle="Exercício 4"
        questionDescription="Considere o seguinte código:"
        codeSnippet={`def soma(a, b=5):
    return a + b

resultado = soma(3)
print(resultado)
`}
        questionText="Qual será a mensagem impressa no terminal?"
        options={["Erro, pois falta um argumento", "3", "8", "None"]}
        correctIndex={2}
        explanation="Quando chamada como soma(3), o valor 3 é atribuído a 'a', e 'b' mantém seu valor padrão (5)."
        localStorageKey="exercicio4_funcoes"
      />

      <QuestionCard
        questionTitle="Exercício 5"
        questionDescription="Considere o seguinte código:"
        codeSnippet={`def misterio(x):
    if x % 2 == 0:
        return "Par"
    return "Ímpar"

print(misterio(7))
`}
        questionText="Qual será a mensagem impressa no terminal?"
        options={["Par", "Ímpar", "None", "Erro"]}
        correctIndex={1}
        explanation="Como 7 % 2 não é igual a 0, a condição do if falha e a função retorna 'Ímpar'."
        localStorageKey="exercicio5_funcoes"
      />
    </div>
  );
}

export default Funcoes;
