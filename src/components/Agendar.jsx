import React from 'react';
import { InlineWidget as Calendly } from 'react-calendly';
import { Image } from 'react-bootstrap';

function Agendar() {
  return (
    <main className="bg-escuro text-light text-center" id='agendar'>
      <Image src="/images/agendamento.svg" alt="Agendamento Título" className='titulo' />
      <h4>Selecione um serviço e faça seu agendamento!</h4>
      <Calendly url="https://calendly.com/lucenabarbearia013" />
    </main>
  );
}

export default Agendar;
