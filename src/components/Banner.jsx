import React from 'react';

function Banner() {
  return (
    <section className="bg-escuro text-light text-center banner" id='home'>
      <div className="animate-fade-in">
        <span className='atendimento' aria-label="Horário de atendimento: terça a sábado, das 9 às 19 horas">
          ter - sab | 09h - 19h
        </span>
        <h1 className="animate-slide-in-up delay-100">Lucena Barbearia</h1>
        <p className="animate-slide-in-up delay-200">Barbearia Familiar, Com Ambiente Climatizado</p>
      </div>
    </section>
  );
}

export default Banner;
