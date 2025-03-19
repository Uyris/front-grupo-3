import React from 'react';
import NextPage from "../../../components/Next_page";

function InicioAula4() {
  return (
    <div>
      <h1>Aula 4 - Início</h1>
      <h2>While</h2>
      <p>
      <strong>O while funciona de maneira similar ao if.</strong> Entretanto, ao chegar no final de um bloco de código desse tipo, o programa <strong>reavalia se a condição inicialmente proposta ainda está satisfeita.</strong> O while tem diversos usos e também pode ser usado como um contador.
      </p>
      <NextPage nomeDaPagina={'While'} link={'/aula-4/while'}/>
    </div>
  );
}

export default InicioAula4;
