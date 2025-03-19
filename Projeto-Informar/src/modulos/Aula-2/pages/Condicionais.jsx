import React from "react";
import QuestionCard from "../../../components/QuestionCard";
import NextPage from "../../../components/Next_page";

function Condicionais() {
  return (
    <div>
      <h1>Aula 2 - Condicionais</h1>
      <p>
        Vamos relembrar do que aprendemos na aula a respeito de condicionais em
        Python.
      </p>

      <QuestionCard
        questionTitle="Exercício 1"
        questionDescription=""
        codeSnippet={``}
        questionText="Quais são as traduções de 'if' e 'else'?"
        options={[
          "se, se não",
          "se não, se",
          "enquanto, para",
          "para, enquanto",
        ]}
        correctIndex={0}
        explanation="if = se, else = se não, elif = else + if"
        localStorageKey="exercicio1_condicionais"
      />
      <QuestionCard
        questionTitle="Exercício 2"
        questionDescription="Considere o seguinte código:"
        codeSnippet={`x = 12
if x < 10:
    print('O numero é menor que 10.')
else:
    print('O número é maior que 10.')`}
        questionText="Qual será a mensagem impressa no terminal?"
        options={[
          "O número é maior que 10.",
          "O número é menor que 10.",
          "12",
          "Não será impresso nada no terminal.",
        ]}
        correctIndex={0}
        explanation="Será impresso a mensagem: O número é maior que 10. Como 12 é maior que 10, ele entra no primeiro if."
        localStorageKey="exercicio2_condicionais"
      />

      <QuestionCard
        questionTitle="Exercício 3"
        questionDescription="Considere o seguinte código:"
        codeSnippet={`a = 5
b = 3
c = a + b
if c > 10:
    print(b)
else:
    print(c)`}
        questionText="Qual será a mensagem impressa no terminal?"
        options={["Não será impresso nada no terminal.", "5", "3", "8"]}
        correctIndex={3}
        explanation="Já que C é menor que 10, será impresso C no terminal, que é o número 8."
        localStorageKey="exercicio3_condicionais"
      />

      <QuestionCard
        questionTitle="Exercício 4"
        questionDescription="Considere o seguinte código:"
        codeSnippet={`subtraindo = False
a = 10
b = 4
c = a - b
if subtraindo:
    print(c)
`}
        questionText="Qual será a mensagem impressa no terminal?"
        options={["6", "4", "Não será impresso nada no terminal.", "14"]}
        correctIndex={2}
        explanation="Como a função subtraindo = False, a função não será exercutada. Ou seja, nada será impresso. "
        localStorageKey="exercicio4_condicionais"
      />

      <QuestionCard
        questionTitle="Exercício 5"
        questionDescription="Considere o seguinte código:"
        codeSnippet={`a = 1
b = 2
c = 3
if a + c > 4:
    print(b + c)
else:
    print(c - b)
`}
        questionText="Qual será a mensagem impressa no terminal?"
        options={["1", "5", "Não será impresso nada no terminal.", "4"]}
        correctIndex={0}
        explanation="Como a + b = 4, o caso não entrará no primeiro if, e sim no else. Por isso, será impresso 1."
        localStorageKey="exercicio5_condicionais"
      />

      <QuestionCard
        questionTitle="Exercício 6"
        questionDescription="Considere o seguinte código:"
        codeSnippet={`idade = 14
if idade < 12:
    print('criança')
elif idade < 20:
    print('adolescente')
elif idade < 60:
    print('adulto')
else:
    print('idoso')`}
        questionText="Qual será a mensagem impressa no terminal?"
        options={["criança", "adolescente", "adulto", "idoso"]}
        correctIndex={1}
        explanation="Como a idade informada é maior que 12, ela não entra no primeiro if, e como é menor que 20, entra no segundo. Assim, a mensagem impressa será: Adolescente."
        localStorageKey="exercicio6_condicionais"
      />
      <NextPage nomeDaPagina={'Aula 3'} link={'/aula-3/inicio'}/>
    </div>
  );
}

export default Condicionais;
