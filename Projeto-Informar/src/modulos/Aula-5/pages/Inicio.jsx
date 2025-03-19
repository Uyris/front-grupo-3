import React from 'react';
import NextPage from "../../../components/Next_page";

function InicioAula5() {
  return (
    <div>
      <h1>Aula 5 - Início</h1>
      <h2>For</h2>
      <p>
      O for pode ser usado em situações semelhantes ao while. Entretanto, não é necessário criar uma variável, cuja veracidade é avaliada  cada iteração do bloco de código, anteriormente, como no while. No caso desse comando, para realizar tarefas repetitivas, com uma quantidade pré-determinada de iterações, é utilizado o comando range junto com a chamada da função for, junto com um contador qualquer.
      </p>
      <p>
      Na maioria das vezes, o uso do for é mais eficiente que o uso do while, já que é necessário menos linhas de código para realizar a mesma tarefa. Os argumentos a ela fornecido são, nessa ordem, o número de início, que é contabilizado, e o de final, que não é levado em consideração - a contagem para um passo antes. Além disso, pode ser fornecido um terceiro argumento, o passo. Ele determina o intervalo entre os valores do contador em cada iteração do bloco de código. Caso ele não seja fornecido, o passo será 1.
      </p>
      <p>
        Além de poder ser usado como uma forma mais eficiente de um contador while, o for pode ser usado para percorrer elementos de listas e strings.
      </p>
      <NextPage nomeDaPagina={'For'} link={'/aula-5/for'}/>
    </div>
  );
}

export default InicioAula5;
