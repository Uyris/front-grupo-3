import React from "react";
import QuestionCard from "../../../components/QuestionCard";
import NextPage from "../../../components/Next_page";

function Strings() {
  return (
    <div>
      <h1>Aula 3 - Strings</h1>
      <p>
        Vamos relembrar do que aprendemos na aula a respeito de strings em
        Python.
      </p>
      <QuestionCard
        questionTitle="Exercício 1"
        questionDescription="Considere o seguinte código:"
        codeSnippet={`string = "informar"
print(string[1])
print(string[3])
print(string[5])
print(string[7])`}
        questionText="Qual será a mensagem impressa no terminal?"
        options={[
          "nomr",
          "ifra",
          `n
o
m
r`,
          `string[1]
string[3]
string[5]
string[7]`,
        ]}
        correctIndex={2}
        explanation="São imprimidos as letras dos índices da string."
        localStorageKey="exercicio1_strings"
      />
      <QuestionCard
        questionTitle="Exercício 2"
        questionDescription="Considere o seguinte código:"
        codeSnippet={`string = "1" + "1"
numero = 1 + 1
print(string,numero)`}
        questionText="Qual será a mensagem impressa no terminal?"
        options={["11 2", "2 11", "2 2", "Aparece algum erro."]}
        correctIndex={0}
        explanation="Pelo fato de a primeira soma serem de strings, elas não funcionam como números e acabam sendo concatenadas."
        localStorageKey="exercicio2_strings"
      />
      <QuestionCard
        questionTitle="Exercício 3"
        questionDescription="Considere o seguinte código:"
        codeSnippet={`a = "Info"
b = "rmar"
c = a + b
print(c.index('r'))`}
        questionText="Qual será a mensagem impressa no terminal?"
        options={["8", "7", "5", "4"]}
        correctIndex={3}
        explanation="Será impresso o índice da primeira aparição da letra r."
        localStorageKey="exercicio3_strings"
      />
      <QuestionCard
        questionTitle="Exercício 4"
        questionDescription="Considere o seguinte código:"
        codeSnippet={`string = "programação"
string_substituida = string.replace('a','x')
print(string_substituida)`}
        questionText="Qual será a mensagem impressa no terminal?"
        options={["progrxmxção", "progrxmxçxo", "progrxmação", "programção"]}
        correctIndex={0}
        explanation="Serão substituídas todas as ocorrências de a por x (atenção: ã é diferente de a)."
        localStorageKey="exercicio4_strings"
      />
      <QuestionCard
        questionTitle="Exercício 5"
        questionDescription="Considere o seguinte código:"
        codeSnippet={`string = "projetoinformar"
string_invertida = string[7:] + string[:7]
print(string_invertida)`}
        questionText="Qual será a mensagem impressa no terminal?"
        options={[
          "projetoinformar",
          "informarprojeto",
          "oinformarprojet",
          "ramrofniotejorp",
        ]}
        correctIndex={1}
        explanation="As strings são fatiadas e então concatenadas."
        localStorageKey="exercicio5_strings"
      />
      <QuestionCard
        questionTitle="Exercício 6"
        questionDescription="Considere o seguinte código:"
        codeSnippet={`texto = "O Informar é um dos dez projetos do GAS e tem como propósito democratizar o ensino de programação."
contagem = texto.count('d')
print(contagem)`}
        questionText="Qual será a mensagem impressa no terminal?"
        options={["2", "3", "4", "5"]}
        correctIndex={2}
        explanation="O programa conta quantas vezes a letra d aparece no texto."
        localStorageKey="exercicio6_strings"
      />
      <QuestionCard
        questionTitle="Exercício 7"
        questionDescription="Considere o seguinte código:"
        codeSnippet={`texto = "O Informar é um dos dez projetos do GAS e tem como propósito democratizar o ensino de programação."
checagem = Informar in texto
checagem2 = código in texto
print(checagem,checagem2)`}
        questionText="Qual será a mensagem impressa no terminal?"
        options={["True True", "False False", "False True", "True False"]}
        correctIndex={3}
        explanation="O código checa se as palavras 'Informar' e 'código' estão presentes no texto."
        localStorageKey="exercicio7_strings"
      />
      <QuestionCard
        questionTitle="Exercício 8"
        questionDescription="Considere o seguinte código:"
        codeSnippet={`string = projeto INFORMAR
maiusculas = string.upper()
minusculas = string.lower()
print(maiusculas, minusculas)`}
        questionText="Qual será a mensagem impressa no terminal?"
        options={[
          "projeto informar PROJETO INFORMAR",
          "PROJETO INFORMAR projeto informar",
          "PROJETO INFORMAR PROJETO INFORMAR",
          "projeto informar projeto informar",
        ]}
        correctIndex={1}
        explanation="A função upper() serve para deixar as letras maiúsculas, enquanto a lower() serve para deixar minúsculas."
        localStorageKey="exercicio8_strings"
      />
      <QuestionCard
        questionTitle="Exercício 9"
        questionDescription="Considere o seguinte código:"
        codeSnippet={`poema = """Que a tristeza te convença
Que a saudade não compensa
E que a ausência não dá paz"""
dividida = poema.split()
print(dividida)`}
        questionText="Qual será a mensagem impressa no terminal?"
        options={[
          "['Que', 'a', 'tristeza', 'te', 'convença', 'Que', 'a', 'saudade', 'não', 'compensa', 'E', 'que', 'a', 'ausência', 'não', 'dá', 'paz']",
          "'Que', 'a', 'tristeza', 'te', 'convença', 'Que', 'a', 'saudade', 'não', 'compensa', 'E', 'que', 'a', 'ausência', 'não', 'dá', 'paz'",
          "dividida",
          "['Que', 'a', 'tristeza', 'te', 'convença'] ['Que', 'a', 'saudade', 'não', 'compensa'] ['E', 'que', 'a', 'ausência', 'não', 'dá', 'paz']",
        ]}
        correctIndex={0}
        explanation="A função split(argumento) divide os termos entre o argumento formando uma lista (se não houver argumento a string é dividida por espaços)."
        localStorageKey="exercicio9_strings"
      />
      <NextPage nomeDaPagina={'Aula 4'} link={'/aula-4/inicio'}/>
    </div>
  );
}

export default Strings;
