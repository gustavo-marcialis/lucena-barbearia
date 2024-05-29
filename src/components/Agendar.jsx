import React from 'react';
import { InlineWidget as Calendly } from 'react-calendly';


function Agendar() {
  return (
    <main className="bg-escuro text-light text-center" id='agendar'>
      <img src="/images/agendamento.svg" alt="Agendamento Título" style={{ width: '20vw', height: 'auto' }} className='titulo' />
      <h4>Selecione um serviço e faça seu agendamento!</h4>
      <Calendly url="https://calendly.com/lucenabarbearia013" />
    </main>
  );
}

export default Agendar;
