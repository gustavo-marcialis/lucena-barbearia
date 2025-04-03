import React from 'react';

function Banner() {
  return (
    <section className="bg-escuro text-light text-center banner" id='home'>
      <span className='atendimento' aria-label="Horário de atendimento: terça a sábado, das 9 às 19 horas">
  ter - sab | 09h - 19h
</span>
      <h1>Lucena Barbearia</h1>
      <p>Barbearia Familiar, Com Ambiente Climatizado</p>
    </section>
  );
}

export default Banner;
