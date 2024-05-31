import React from 'react';
import { Div, Button } from 'react-bootstrap';


function Galeria() {
  return (
    <section className="bg-escuro text-light text-center" id='galeria'>
      <img src="/images/galeria.svg" alt="Agendamento Título" className='titulo' />

      <div className="d-flex justify-content-center galeria">
        <img src="/images/fachada.jpg" className="d-block" alt="Fachada" />
        <img src="/images/profissional.jpg" className="d-block" alt="Profissional" />
        <img src="/images/corte.jpg" className="d-block" alt="Corte" />
      </div>
      <br />

      <div className="d-flex justify-content-center galeria2">
        <img src="/images/cliente.jpg" className="d-block" alt="Cliente Infantil" />
        <img src="/images/servico.jpg" className="d-block" alt="Serviço" />
      </div>
      <br />
      
      <a href="https://www.instagram.com/barbearia_lucena/" target='_blank' rel='noreferrer'><button type='button' className='insta'>Visitar Instagram</button></a>
    </section>
  );
}

export default Galeria;
