import React from "react";
import QuestionCard from "../../../components/QuestionCard";
import NextPage from "../../../components/Next_page";

function Variaveis() {
  return (
    <div>
      <h1>Aula 1 - Variáveis</h1>
      <p>
        Vamos relembrar do que aprendemos na aula a respeito de variáveis em
        Python.
      </p>
      <QuestionCard
        questionTitle="Exercício 1"
        questionDescription="Considere o seguinte código:"
        codeSnippet={`x = int(1.324)
print(x)`}
        questionText="Qual será a mensagem impressa no terminal?"
        options={["1", "1.324", "1.32", "1.0"]}
        correctIndex={0}
        explanation="int() > números inteiros"
        localStorageKey="exercicio1_variaveis"
      />
      <QuestionCard
        questionTitle="Exercício 2"
        questionDescription="Considere o seguinte código:"
        codeSnippet={`x = float(2)
print(x)`}
        questionText="Qual será a mensagem impressa no terminal?"
        options={["2", "0.2", "2.0", "-2"]}
        correctIndex={2}
        explanation="float() > números decimais (Quando o número é inteiro, é adicionada uma casa decimal .0)"
        localStorageKey="exercicio2_variaveis"
      />
      <QuestionCard
        questionTitle="Exercício 3"
        questionDescription="Considere o seguinte código:"
        codeSnippet={`nome = 'Pedro'
print('nome')
print(nome)`}
        questionText="Qual será a mensagem impressa no terminal?"
        options={[
          `nome
Pedro`,
          `Pedro
nome`,
          `'nome' 
nome`,
          `'nome'
Pedro`,
        ]}
        correctIndex={0}
        explanation="A primeira impressão está imprimindo a string 'nome', enquanto a segunda está imprimindo a variável nome que armazena 'Pedro'."
        localStorageKey="exercicio3_variaveis"
      />
      <QuestionCard
        questionTitle="Exercício 4"
        questionDescription="Considere o seguinte código:"
        codeSnippet={`a = 3
b = 5
c = 7
c = a + b
print(c)`}
        questionText="Qual será a mensagem impressa no terminal?"
        options={["8", "10", "15", "12"]}
        correctIndex={0}
        explanation="A variável c é atualizada na ultima linha, fazendo com que a terceira linha seja irrelevante."
        localStorageKey="exercicio4_variaveis"
      />
      <QuestionCard
        questionTitle="Exercício 5"
        questionDescription="Considere o seguinte código:"
        codeSnippet={`a = 5
b = a
a = 2
print(a * b)`}
        questionText="Qual será a mensagem impressa no terminal?"
        options={["4", "10", "5", "25"]}
        correctIndex={1}
        explanation="A variável a é armazenada em b, mas depois é atualizada por outro valor."
        localStorageKey="exercicio5_variaveis"
      />
        <NextPage nomeDaPagina={'Terminal'} link={'/aula-1/terminal'}/>
        
    </div>
    

  );
}

export default Variaveis;
